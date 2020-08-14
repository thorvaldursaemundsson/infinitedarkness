import React from 'react';
import * as THREE from "three";
import { IStarSystem, IStar, IPlanetoid, IHeavelyBody, Distance } from './Lore/IStarSystem';

interface IThreejsProps {
    starSystem: IStarSystem
}

interface Coordinates {
    x: number;
    y: number;
}

class Threejs extends React.Component<IThreejsProps, {}> {
    mount: any;
    mouseMoving: 'none' | 'left' | 'right';
    rotationEuler: THREE.Euler;
    mouseStartCoordinates: Coordinates;
    zoomEuler: THREE.Euler;
    speedOfTime: number = 25;

    constructor(props: IThreejsProps) {
        super(props);
        this.mouseMoving = 'none';
        this.rotationEuler = new THREE.Euler(0, 0, 0);
        this.mouseStartCoordinates = { x: 0, y: 0 };
        this.zoomEuler = new THREE.Euler(0, 0, 0);
    }

    getColorFromStar(star: IStar): string {
        if (star.imageURL !== undefined && star.imageURL !== '') return star.imageURL;
        switch (star.classification) {
            case 'A': return 'texture_star_class_a.jpg';
            case 'F': return 'texture_star_class_f.jpg';
            case 'G': return 'texture_star_class_g.jpg';
            case 'K': return 'texture_star_class_k.jpg';
            case 'M': return 'texture_star_class_m.jpg';
            default: return 'white.jpg';
        }
    }

    getColorFromPlanet(planet: IPlanetoid): string {
        if (planet.imageURL !== undefined) return planet.imageURL;
        return 'white.jpg'
    }

    getOritalDistanceMod(dist: Distance) {
        switch (dist.unit) {
            case 'AU': return dist.distance / .5;
            case 'km': return dist.distance / 149597871;
            case 'LY': return dist.distance * 100;
        }
    }

    makeSystem(rotator: IRotator[]) {
        var base = this.makeSphere(0.0000001, '', '');
        var stars = this.props.starSystem.stars.map((s, si, siar) => {

            var m = this.makeSphere(0.6 + s.mass / 20, s.name, this.getColorFromStar(s));
            let rotStar = { mesh: m, body: s, star: true, satelite: false };
            var p = s.planetoids.map((p, i, ar) => {
                var planetSphere = this.makeSphere(0.3 + p.mass / 240, p.name, this.getColorFromPlanet(p));
                let rotPlan = { mesh: planetSphere, body: p, star: false, parent: rotStar, satelite: false };
                planetSphere.rotation.z = p.axialTilt;
                var satelites = p.satelites.map((sat, ix, sar) => {
                    let sa = this.makeSphere(0.2 + sat.mass / 360, sat.name, this.getColorFromPlanet(sat));
                    sa.rotation.z = sat.axialTilt;
                    rotator.push({ mesh: sa, body: sat, star: false, parent: rotPlan, satelite: true });
                    return sa;
                });
                satelites.forEach(s => base.attach(s));
                rotator.push(rotPlan);
                return planetSphere;
            });
            m.rotation.z = s.axialTilt;
            p.forEach(plan => base.attach(plan));
            rotator.push(rotStar);
            return m;
        });
        stars.forEach(star => base.attach(star));
        return base;
    }


    makeLabelCanvas(x: number, baseWidth: number, size: number, name: string) {
        const borderSize = 1;
        const ctx = document.createElement('canvas').getContext('2d');
        if (ctx === null) throw new Error();
        const font = `${size}px bold sans-serif`;
        ctx.font = font;
        // measure how long the name will be
        const textWidth = ctx.measureText(name).width;

        const doubleBorderSize = borderSize * 2;
        const width = baseWidth + doubleBorderSize;
        const height = size + doubleBorderSize;
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        // need to set font again after resizing canvas
        ctx.font = font;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);

        // scale to fit but don't stretch
        const scaleFactor = Math.min(1, baseWidth / textWidth);
        ctx.translate(width / 2, height / 2);
        ctx.scale(scaleFactor, 1);
        ctx.fillStyle = 'white';
        ctx.fillText(name, 0, 0);
        const canvas = ctx.canvas;
        const texture = new THREE.CanvasTexture(canvas);

        const labelMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
        });

        const label = new THREE.Sprite(labelMaterial);

        const root = new THREE.Object3D();
        root.position.x = x;
        root.add(label);
        label.position.y = 1;
        //label.position.z = .4 * 1.01;

        // if units are meters then 0.01 here makes size
        // of the label into centimeters.
        const labelBaseScale = 0.01;
        label.scale.x = canvas.width * labelBaseScale;
        label.scale.y = canvas.height * labelBaseScale;
        return label;
    }

    makeSphere(radius: number, label: string, img: string) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(img) }));
        if (label.length > 0)
            mesh.attach(this.makeLabelCanvas(0, 40, 12, label));
        return mesh;
    }

    moveMouse(e: MouseEvent) {
        if (this.mouseMoving === 'none') return;
        if (this.mouseMoving === 'left') {

            this.rotationEuler.y = (this.mouseStartCoordinates.x - e.offsetX);
            this.rotationEuler.x = (this.mouseStartCoordinates.y - e.offsetY);
            return;
        }
        if (this.mouseMoving === 'right') {
            this.zoomEuler.y = (this.mouseStartCoordinates.x - e.offsetX);
            this.zoomEuler.x = (this.mouseStartCoordinates.y - e.offsetY);
        }
    }

    startMoveMouse(e: MouseEvent) {
        if (e.button === 0) {
            this.mouseMoving = 'left';
            this.mouseStartCoordinates.x = e.offsetX + this.rotationEuler.y;
            this.mouseStartCoordinates.y = e.offsetY + this.rotationEuler.x;
        }
        else if (e.button === 2) {
            this.mouseMoving = 'right';
            this.mouseStartCoordinates.x = e.offsetX + this.zoomEuler.y;
            this.mouseStartCoordinates.y = e.offsetY + this.zoomEuler.x;
        }
        e.preventDefault();
        return false;
    }

    endMoveMouse() {
        this.mouseMoving = 'none';
    }



    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(760, 760);
        this.mount.appendChild(renderer.domElement);
        renderer.domElement.addEventListener('mousedown', (e) => this.startMoveMouse(e));
        renderer.domElement.addEventListener('mousemove', (e) => this.moveMouse(e));
        renderer.domElement.addEventListener('mouseup', () => this.endMoveMouse());

        var rotatorList: IRotator[] = [];
        var system = this.makeSystem(rotatorList);

        scene.add(system);
        camera.position.z = 5;
        let counter = 1;
        var animate = () => {
            requestAnimationFrame(animate);
            counter += this.speedOfTime;
            if (counter > 3600000000000) counter = 0;
            rotatorList.forEach((s, i, ar) => {
                s.mesh.rotation.y += ((25) / s.body.dayPeriod) + 0.001;
                if (s.star === false) {
                    let b: IPlanetoid = s.body as IPlanetoid;
                    if (s.parent === undefined) throw new Error();
                    const speed = calculateOrbitalSpeed(s.parent.body.mass, b.orbitDistance);
                    let mult = (s.satelite ? 150 : 1) + 1;
                    s.mesh.position.x = Math.sin(counter * speed) * (this.getOritalDistanceMod(b.orbitDistance) * mult) + this.getPosX(s);
                    s.mesh.position.y = Math.cos(counter * speed) * (this.getOritalDistanceMod(b.orbitDistance) * mult) + this.getPosY(s);
                }

            })
            if (this.mouseMoving === 'left') {
                system.position.x = -this.rotationEuler.y / 100;
                system.position.y = this.rotationEuler.x / 100;
            }
            else if (this.mouseMoving === 'right') {
                system.position.z = (this.zoomEuler.x + this.zoomEuler.y) / 40;
            }
            renderer.render(scene, camera);
        };
        animate();
    }

    getPosX(rot: IRotator) {
        if (rot.parent !== undefined) return rot.parent.mesh.position.x;
        else return 0;
    } getPosY(rot: IRotator) {
        if (rot.parent !== undefined) return rot.parent.mesh.position.y;
        else return 0;
    }

    render() {
        return <div><button onClick={() => this.speedOfTime = (this.speedOfTime === 25 ? 0 : 25)}>{'||>'}</button><div onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)} /></div>
    }
}

export default Threejs;

interface IRotator {
    mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
    body: IHeavelyBody;
    star: boolean;
    satelite: boolean;
    parent?: IRotator;
}

const calculateOrbitalSpeed = (sourceMass: number, orbitalRadius: Distance) => {
    const G = 0.000000000066743;
    return Math.sqrt(sourceMass * orbitalRadius.distance * G) / orbitalRadius.distance * 2 * Math.PI;
}