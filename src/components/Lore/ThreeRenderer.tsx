import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ReactThreeFiber } from 'react-three-fiber';
import THREE from 'three';

export interface IStellarRendererProps {
    backgroundColor: string;
    sphereColor: string;
}

const ThreeRenderer: React.FC<IStellarRendererProps> = ({ children, backgroundColor, sphereColor }) => {
    const mesh = useRef<ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>>();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);


    useFrame(() => {
        if (mesh !== undefined && mesh.current !== undefined && mesh.current.rotateX !== undefined) {
            mesh.current.rotateX(0.01);
        }
    });

    return (<Canvas>
        <ambientLight />
        <mesh
            ref={mesh}

            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}

            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />

        </mesh>
    </Canvas>);
}

export default ThreeRenderer;