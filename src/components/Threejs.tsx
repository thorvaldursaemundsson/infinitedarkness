import React from 'react';
import * as THREE from "three";
import { IStarSystem, IStar, IPlanetoid } from './Lore/IStarSystem';

interface IThreejsProps {
    starSystem: IStarSystem
}

interface Coordinates {
    x: number;
    y: number;
}

class Threejs extends React.Component<IThreejsProps, {}> {
    mount: any;
    mouseMoving: boolean;
    rotationEuler: THREE.Euler;
    mouseStartCoordinates: Coordinates;

    constructor(props: IThreejsProps) {
        super(props);
        this.mouseMoving = false;
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

    getColorFromPlanet(planet:IPlanetoid): [string, string] {
        let col1 = '#00FF00';
        let col2 = '#0000FF';

        if (planet.temperatureRange[0] < -100) col1 = '#FFFFFF';
        if (planet.temperatureRange[2] > 300) col2 = '#FF3300';


        return [col1, col2];
    }

    makeSystem() {
        var stars = this.props.starSystem.stars.map(s => {
            var p = s.planetoids.map((p, i, ar) => {
                var x = this.makeSphere(.25 + p.mass / 180, ...this.getColorFromPlanet(p));
                x.position.x = i + 1 + p.orbitDistance.distance / 1000;
                return x;
            });
            var m = this.makeSphere(.5 + s.mass / 40, ...this.getColorFromStar(s));
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

    makeSphere(radius: number, color1: string, color2: string) {
        return new THREE.Mesh(new THREE.SphereGeometry(radius, 8, 8),
            new THREE.MeshBasicMaterial({ map: this.makeTexture(color1, color2) }));
    }

    moveMouse(e: MouseEvent) {
        if (this.mouseMoving === false) return;
        this.rotationEuler.y = (this.mouseStartCoordinates.x - e.offsetX) * .1;
        this.rotationEuler.x = (this.mouseStartCoordinates.y - e.offsetY) * .1;
    }

    startMoveMouse(coordinates: Coordinates) {
        this.mouseMoving = true;
        this.mouseStartCoordinates = coordinates;
    }

    endMoveMouse() {
        this.mouseMoving = false;
        //this.rotationEuler.y = 0;
        //this.rotationEuler.x = 0;
        //this.rotationEuler.z = 0;
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
                //s.rotation.x = this.rotationEuler.x;
                //s.rotation.y = this.rotationEuler.y;
                s.position.x += -this.rotationEuler.y/200;
                //s.position.y += -this.rotationEuler.x/200;
            });
            //system.rotation.x = this.rotationEuler.x ;
            //system.rotation.y = this.rotationEuler.y ;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />
    }
}

export default Threejs;