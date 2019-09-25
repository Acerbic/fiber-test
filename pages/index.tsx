import React from "react";
import dynamic from "next/dynamic";

const CanvasOctahedron = dynamic(
    () =>
        import("../components/CanvasOctahedron").then(
            module => module.CanvasOctahedron
        ),
    {
        ssr: false,
    }
);
const Home = () => (
    <div>
        <style jsx>{`
            div {
                width: 100vw;
                height: 100vh;
            }
            :global(body) {
                margin: 0;
            }
        `}</style>
        <CanvasOctahedron />
    </div>
);

export default Home;
