/**
 * Example adapted from https://codesandbox.io/embed/9y8vkjykyy
 */

import { Canvas } from "react-three-fiber";
import { Octahedron } from "./Octahedron";
import { Color } from "three";

import { useLoader, ReactThreeFiber } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SkullScene() {
    const model = useLoader(
        (GLTFLoader as any) as THREE.Loader,
        "../static/skull/scene.gltf",
        loader => {}
    );
    console.log(model);
    return (
        <group rotation={[-90, 0, 0]} position={[0, 0, 2]}>
            {model.map(({ geometry, material }) => (
                <mesh key={geometry.uuid} geometry={geometry} castShadow>
                    <meshStandardMaterial
                        attach="material"
                        map={(material as THREE.MeshStandardMaterial).map}
                        roughness={1}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function CanvasOctahedron() {
    return (
        <Canvas>
            <ambientLight color={new Color("lightblue")} />
            <pointLight
                color={new Color("white")}
                intensity={6}
                position={[10, 10, 10]}
            />
            <SkullScene />
            {/* <Octahedron /> */}
        </Canvas>
    );
}
