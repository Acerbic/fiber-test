import React from "react";
import dynamic from "next/dynamic";

const SceneCanvas = dynamic(
    () =>
        import("../components/SceneCanvas").then(module => module.SceneCanvas),
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
                background-color: black;
            }
            p {
                font-size: 5em;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                color: gray;
                margin: 0.1em;
            }
        `}</style>
        <SceneCanvas />
        <p> (Octahedrons are clickable!) </p>
    </div>
);

export default Home;
