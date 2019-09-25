/**
 * Example adapted from https://codesandbox.io/embed/9y8vkjykyy
 */

import * as THREE from "three/src/Three";
import React, { useState } from "react";

import { useSpring, animated } from "react-spring/three";

export function Octahedron() {
    const [active, setActive] = useState(false);
    const [hovered, setHover] = useState(false);
    const vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]];
    const { color, pos, ...props } = useSpring({
        color: active ? "hotpink" : "white",
        pos: active ? [0, 0, 2] : [0, 0, 0],
        "material-opacity": hovered ? 0.6 : 0.25,
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        rotation: active
            ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)]
            : [0, 0, 0],
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
    });
    return (
        <group>
            <animated.line position={pos}>
                <geometry
                    attach="geometry"
                    vertices={vertices.map(v => new THREE.Vector3(...v))}
                />
                <animated.lineBasicMaterial attach="material" color={color} />
            </animated.line>
            <animated.mesh
                onClick={e => setActive(!active)}
                onPointerOver={e => setHover(true)}
                onPointerOut={e => setHover(false)}
                {...props}
            >
                <octahedronGeometry attach="geometry" />
                <meshStandardMaterial
                    attach="material"
                    color="grey"
                    transparent
                />
            </animated.mesh>
        </group>
    );
}
