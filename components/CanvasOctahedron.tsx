/**
 * Example adapted from https://codesandbox.io/embed/9y8vkjykyy
 */
import { useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Octahedron } from "./Octahedron";
import { Color } from "three";

import { useLoader, useRender } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SkullScene() {
    const groupRef = useRef<THREE.Group>();
    const model = useLoader(
        (GLTFLoader as any) as THREE.Loader,
        "../static/skull/scene.gltf",
        loader => {}
    );

    useRender((_, timestamp) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        model &&
        model.length && (
            <group ref={groupRef} position={[0, 0, 3]}>
                {model.map(({ geometry, material }) => (
                    <mesh
                        key={geometry.uuid}
                        geometry={geometry}
                        castShadow
                        rotation={[80, 0, 0]}
                    >
                        <meshStandardMaterial
                            attach="material"
                            map={(material as THREE.MeshStandardMaterial).map}
                            roughness={1}
                        />
                    </mesh>
                ))}
            </group>
        )
    );
}

export function CanvasOctahedron() {
    return (
        <Canvas>
            <ambientLight color={new Color("lightblue")} />
            <pointLight
                color={new Color("white")}
                intensity={3}
                position={[10, 10, 10]}
            />
            <SkullScene />
            {/* <Octahedron /> */}
        </Canvas>
    );
}
