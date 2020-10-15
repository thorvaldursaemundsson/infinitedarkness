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
const speedOfTimeMax = 15;
class Threejs extends React.Component<IThreejsProps, {}> {
    mount: any;
    mouseMoving: 'none' | 'left' | 'right';
    rotationEuler: THREE.Euler;
    mouseStartCoordinates: Coordinates;
    zoomEuler: THREE.Euler;

    speedOfTime: number = speedOfTimeMax;

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
            case 'A': return 'images/texture_star_class_a.jpg';
            case 'F': return 'images/texture_star_class_f.jpg';
            case 'G': return 'images/texture_star_class_g.jpg';
            case 'K': return 'images/texture_star_class_k.jpg';
            case 'M': return 'images/texture_star_class_m.jpg';
            default: return 'white.jpg';
        }
    }

    getColorFromPlanet(planet: IPlanetoid): string {
        if (planet.imageURL !== undefined) return planet.imageURL;
        return 'white.jpg'
    }



    makeStar(star: IStar, parentMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>, source: IRotator[]) {
        var [starContainer, starSphere, label] = this.makeSphere(this.calculateStarSize(star), star.name, this.getColorFromStar(star), star.axialTilt);
        starSphere.rotation.x = star.axialTilt;
        parentMesh.attach(starContainer);
        let starRot: IRotator = { mesh: starSphere, body: star, star: true, satelite: false, periodFactor: 0, label: label, distanceMod: 0 };
        source.push(starRot);
        star.planetoids.map(planet => this.makePlanet(planet, starRot, parentMesh, source));
        return starRot;
    }

    calculateStarSize(star: IStar) {
        return 0.6 + star.mass / 20;
    }

    calculatePlanetSize(planet: IPlanetoid) {
        return 0.1 + planet.mass / 60;
    }

    makePlanet(planet: IPlanetoid, parent: IRotator, parentMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>, source: IRotator[], isSatelite: boolean = false) {
        if (planet.bodyType === 'belt') return this.makeBelt(planet, parent, parentMesh, source);
        if (planet.bodyType === 'ring') return this.makeRings(planet, parent);
        var [planetContainer, planetSphere, label] = this.makeSphere(this.calculatePlanetSize(planet), planet.name, this.getColorFromPlanet(planet), planet.axialTilt);
        parentMesh.attach(planetContainer);
        let rotPlan: IRotator = {
            mesh: planetSphere,
            body: planet, star: false, satelite: isSatelite, parent: parent, periodFactor: calculateOrbitalPeriod(parent.body.mass, planet.orbitDistance),
            label: label, distanceMod: getOritalDistanceMod(planet.orbitDistance)
        };
        planetSphere.rotation.x = planet.axialTilt;
        source.push(rotPlan);
        planet.satelites.map(sat => this.makePlanet(sat, rotPlan, parentMesh, source, true));
        return rotPlan;
    }

    makeBelt(belt: IPlanetoid, parent: IRotator, parentMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>, source: IRotator[]) {
        if (belt.bodyType !== 'belt') throw new Error('whoops');
        let innerRadius = getOritalDistanceMod(belt.orbitDistance) - 0.5;
        let outerRadius = innerRadius * 1.25 + 1;
        var beltDisk = this.makeHolyDisk(innerRadius, outerRadius, 'images/texture_planet_belt.png', 0);
        let beltPlan: IRotator = {
            mesh: beltDisk, body: belt, star: false,
            satelite: false, parent: parent, periodFactor: calculateOrbitalPeriod(parent.body.mass, belt.orbitDistance),
            label: undefined, distanceMod: 0
        };
        source.push(beltPlan);
        parentMesh.attach(beltDisk);
        return beltPlan;
    }

    makeRings(ring: IPlanetoid, parent: IRotator) {
        if (ring.bodyType !== 'ring') throw new Error('whoops');
        const inner = 0.2 + parent.body.mass / 120;
        const outer = inner + 0.2;
        let rings = this.makeHolyDisk(inner, outer, 'images/texture_planet_rings.png', parent.body.axialTilt);
        rings.rotation.x = 90;
        rings.rotation.y = parent.body.axialTilt;
        parent.mesh.attach(rings);
    }

    makeSystem(rotator: IRotator[]) {
        let base: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> = new THREE.Mesh();
        this.props.starSystem.stars.map((star) => this.makeStar(star, base, rotator));
        return base;
    }


    makeLabelCanvas(x: number, baseWidth: number, size: number, name: string) {
        const borderSize = 1;
        const ctx = document.createElement('canvas').getContext('2d');
        if (ctx === null) throw new Error('something went terribly wrong sorry');
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

    makeSphere(radius: number, label: string, img: string, negativeTilt: number): [THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>, THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>, THREE.Sprite | undefined] {
        const parent: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> = new THREE.Mesh();
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 32),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(img) }));
        sphere.rotation.y = 90;
        let canvas: THREE.Sprite | undefined = undefined;;
        if (label.length > 0) {
            canvas = this.makeLabelCanvas(0, 40, 12, label);
            parent.attach(canvas);
        }
        parent.attach(sphere);
        return [parent, sphere, canvas];
    }

    makeHolyDisk(innerRadius: number, outerRadius: number, img: string, tilt: number) {
        const map = new THREE.TextureLoader().load(img);
        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(4, 4);
        map.needsUpdate = true;

        const bigDisk = new THREE.Mesh(new THREE.RingGeometry(innerRadius, outerRadius, 32, 32),
            new THREE.MeshBasicMaterial({ map: map }));

        bigDisk.material.side = THREE.DoubleSide;
        bigDisk.rotation.x = tilt * -0.5;
        return bigDisk;
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
        var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
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
        let counter = 0;
        var animate = () => {
            requestAnimationFrame(animate);
            counter += this.speedOfTime;
            if (counter > 3600000) counter = 0;
            rotatorList.forEach((s, i, ar) => {
                if (s.body.bodyType === 'belt') {
                    s.mesh.rotation.z -= ((25 + this.speedOfTime) / s.body.dayPeriod);
                    return;
                }
                else if (s.star === false) {
                    let planet: IPlanetoid = s.body as IPlanetoid;
                    let distMod = s.distanceMod; //this.getOritalDistanceMod(planet.orbitDistance);
                    if (s.satelite && s.parent !== undefined) {
                        let par: IPlanetoid = s.parent.body as IPlanetoid;
                        distMod += this.calculatePlanetSize(planet) + this.calculatePlanetSize(par);
                    }
                    s.mesh.position.x = Math.sin(counter * s.periodFactor) * distMod + this.getPosX(s);
                    s.mesh.position.y = Math.cos(counter * s.periodFactor) * distMod + this.getPosY(s);
                    if (s.label !== undefined) {
                        s.label.position.x = s.mesh.position.x;
                        s.label.position.y = s.mesh.position.y + 0.5 + s.body.mass / 240;
                    }
                }
                s.mesh.rotation.y += ((25 + this.speedOfTime) / s.body.dayPeriod);
            })
            if (this.mouseMoving === 'left') {
                system.position.x = (-this.rotationEuler.y / 100) * Math.max((1 + -system.position.z / 10), 0.1);
                system.position.y = this.rotationEuler.x / 100 * Math.max((1 + -system.position.z / 10), 0.1);
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
        return <div><button onClick={() => this.speedOfTime = (this.speedOfTime === speedOfTimeMax ? 0 : speedOfTimeMax)}>{'||>'}</button><div onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)} /></div>
    }
}

export default Threejs;

interface IRotator {
    mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> | THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
    body: IHeavelyBody;
    label: THREE.Sprite | undefined;
    star: boolean;
    satelite: boolean;
    parent?: IRotator;
    periodFactor: number;
    distanceMod: number;
}

const calculateOrbitalPeriod = (sourceMass: number, orbitalRadius: Distance) => {
    const G = 0.000000000066743;
    return (Math.sqrt(sourceMass * getOritalDistanceMod(orbitalRadius, 1, 1) * G) / (orbitalRadius.distance * 2 * Math.PI)) * 30;
}

const getOritalDistanceMod = (dist: Distance, exponent = .5, factor = 3) => {
    switch (dist.unit) {
        case 'AU': return Math.pow(dist.distance, exponent) * factor;
        case 'km': return Math.pow(dist.distance / 149597871, exponent) * factor;
        case 'LY': return Math.pow(dist.distance * 63239, exponent) * factor;
    }
}