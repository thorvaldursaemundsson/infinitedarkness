import React from 'react';
import * as THREE from "three";

class Threejs extends React.Component<{}, {}> {
    mount: any;
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(760, 760);
        this.mount.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, reflectivity: 0.1, wireframe: true });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate =  () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />
    }
}

export default Threejs;