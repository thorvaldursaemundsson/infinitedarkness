import React from 'react';
import * as THREE from "three";
import { IStarSystem, IStar, IPlanetoid, DistanceType } from './Lore/IStarSystem';

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

    constructor(props: IThreejsProps) {
        super(props);
        this.mouseMoving = 'none';
        this.rotationEuler = new THREE.Euler(0, 0, 0);
        this.mouseStartCoordinates = { x: 0, y: 0 };
    }

    getColorFromStar(star: IStar): [string, string] {
        switch (star.classification) {
            case 'A': return ['#FFFFFF', '#9999FF'];
            case 'F': return ['#FFCCCC', '#FFFFFF'];
            case 'G': return ['#FFAAAA', '#FFDDDD'];
            case 'K': return ['#DD8888', '#AA6666'];
            case 'M': return ['#BB7777', '#995544'];
            default: return ['#AA0000', '#663333'];
        }
    }

    getColorFromPlanet(planet: IPlanetoid): [string, string] {
        let col1 = '#00FF00';
        let col2 = '#0000FF';

        if (planet.temperatureRange[0] < -100) col1 = '#FFFFFF';
        if (planet.temperatureRange[2] > 300) col2 = '#FF3300';


        return [col1, col2];
    }

    getOritalDistanceMod(unit: DistanceType) {
        switch (unit) {
            case 'AU': return 1 / 1000;
            case 'km': return 1 / 100000;
            case 'LY': return 1;
        }
    }

    makeSystem() {
        var stars = this.props.starSystem.stars.map((s, si, siar) => {
            var p = s.planetoids.map((p, i, ar) => {
                var planetSphere = this.makeSphere(.25 + p.mass / 160, p.name, ...this.getColorFromPlanet(p));
                planetSphere.position.x = i + 1 + p.orbitDistance.distance * (this.getOritalDistanceMod(p.orbitDistance.unit));
                planetSphere.position.y = si * 2;

                var satelites = p.satelites.map((sat, ix, sar) => {
                    let sa = this.makeSphere(0.15 + sat.mass / 120, sat.name, ...this.getColorFromPlanet(sat));
                    sa.position.x = planetSphere.position.x;
                    sa.position.y = ix + 1 + sat.orbitDistance.distance * (this.getOritalDistanceMod(sat.orbitDistance.unit));
                    sa.position.y += si * 2;
                    return sa;
                });
                satelites.forEach(s => planetSphere.attach(s));
                return planetSphere;
            });
            var m = this.makeSphere(.5 + s.mass / 30, s.name, ...this.getColorFromStar(s));
            m.position.y = si * 2;
            return [m, ...p];
        });
        return stars.reduce((a, b) => [...a, ...b]);
    }

    makeTexture(color1: string, color2: string) {
        let size = 512;
        let canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        let context = canvas.getContext("2d");
        if (context === null) throw new Error();

        context.rect(0, 0, size, size);
        var gradient = context.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, color1); // light blue 
        gradient.addColorStop(1, color2); // dark blue
        context.fillStyle = gradient;
        context.fill();

        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
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

    makeSphere(radius: number, label: string, color1: string, color2: string) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 8, 8),
            new THREE.MeshBasicMaterial({ map: this.makeTexture(color1, color2) }));
        mesh.attach(this.makeLabelCanvas(0, 40, 12, label));
        return mesh;
    }

    moveMouse(e: MouseEvent) {
        if (this.mouseMoving === 'none') return;
        this.rotationEuler.y = (this.mouseStartCoordinates.x - e.offsetX) * .1;
        this.rotationEuler.x = (this.mouseStartCoordinates.y - e.offsetY) * .1;
    }

    startMoveMouse(e: MouseEvent) {
        if (e.button === 0) this.mouseMoving = 'left';
        else if (e.button === 2) this.mouseMoving = 'right';
        this.mouseStartCoordinates.x = e.offsetX;
        this.mouseStartCoordinates.y = e.offsetY;
        e.preventDefault();
        return false;
    }

    endMoveMouse() {
        this.mouseMoving = 'none';
        this.rotationEuler.y = 0;
        this.rotationEuler.x = 0;
        this.rotationEuler.z = 0;
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

        var system = this.makeSystem();

        scene.add(...system);
        camera.position.z = 5;
        var animate = () => {
            requestAnimationFrame(animate);
            system.forEach(s => {
                if (this.mouseMoving === 'left') {
                    s.position.x += -this.rotationEuler.y / 100;
                    s.position.y += this.rotationEuler.x / 100;
                }
                else if (this.mouseMoving === 'right') {
                    s.position.z = this.rotationEuler.x / 5;
                }
                s.rotation.x += 0.01;
                s.rotation.y += 0.02;
            });
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return <div onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)} />
    }
}

export default Threejs;