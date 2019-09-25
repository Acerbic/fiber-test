/**
 * Example adapted from https://codesandbox.io/embed/9y8vkjykyy
 */
import { useRef, useState } from "react";

import { useLoader, useRender } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Skull() {
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
            <group ref={groupRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
                {model.map(({ geometry, material }) => (
                    <mesh
                        key={geometry.uuid}
                        geometry={geometry}
                        castShadow
                        rotation={[80, 0, 0]}
                    >
                        <primitive object={material} attach="material" />
                    </mesh>
                ))}
            </group>
        )
    );
}
