import { Color } from "three";
import { Canvas } from "react-three-fiber";
import { Skull } from "./Skull";
import { Octahedron } from "./Octahedron";

export function SceneCanvas() {
    return (
        <Canvas>
            <ambientLight color={new Color("lightblue")} />
            <pointLight
                color={new Color("red")}
                intensity={1}
                position={[-10, -10, -3]}
            />
            <pointLight
                color={new Color("white")}
                intensity={3}
                position={[10, 10, 10]}
            />
            <Skull />
            <group position={[-2, -2, 0]}>
                <Octahedron />
            </group>
            <group position={[-2, 2, 0]}>
                <Octahedron />
            </group>
            <group position={[2, 2, 0]}>
                <Octahedron />
            </group>
            <group position={[2, -2, 0]}>
                <Octahedron />
            </group>
        </Canvas>
    );
}
