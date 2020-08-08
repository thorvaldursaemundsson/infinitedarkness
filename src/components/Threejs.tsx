import React from 'react';
import * as THREE from "three";
import { IStarSystem } from './Lore/IStarSystem';

interface IThreejsProps {
    starSystem:IStarSystem
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

    makeSystem(){
        var stars = this.props.starSystem.stars.map(s => {
            var p = s.planetoids.map(p => {
                var x = this.makeSphere(p.mass/10, 0xFF0000);
                x.position.x = p.orbitDistance.distance;
                return x;
            });
            var m = this.makeSphere(s.mass/10, 0xFFFFFF);
            for (var pp in p) {
                m.geometry.merge(p[pp].geometry, p[pp].matrix);
            }
            return m;
        });
        return stars[0];
    }



    makeSphere(radius: number, color: number) {
        return new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 32),
            new THREE.MeshBasicMaterial({ color: color, wireframe:true }));
    }

    moveMouse(e: MouseEvent) {
        if (this.mouseMoving === false) return;
        this.rotationEuler.y = (this.mouseStartCoordinates.x - e.offsetX)*.01;
        this.rotationEuler.x = (this.mouseStartCoordinates.y - e.offsetY)*.01;
    }

    startMoveMouse(coordinates: Coordinates) {
        this.mouseMoving = true;
        this.mouseStartCoordinates = coordinates;
    }

    endMoveMouse() {
        this.mouseMoving = false;
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

        scene.add(system);
        camera.position.z = 5;
        var animate = () => {
            requestAnimationFrame(animate);
            system.rotation.x = this.rotationEuler.x;
            system.rotation.y = this.rotationEuler.y;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />
    }
}

export default Threejs;