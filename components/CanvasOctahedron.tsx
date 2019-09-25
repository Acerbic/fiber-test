/**
 * Example adapted from https://codesandbox.io/embed/9y8vkjykyy
 */

import { Canvas } from "react-three-fiber";
import { Octahedron } from "./Octahedron";
import { Color } from "three";

export function CanvasOctahedron() {
    return (
        <Canvas>
            <ambientLight color={new Color("lightblue")} />
            <pointLight
                color={new Color("white")}
                intensity={1}
                position={[10, 10, 10]}
            />
            <Octahedron />
        </Canvas>
    );
}
