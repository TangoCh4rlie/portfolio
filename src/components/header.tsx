import { Typewriter } from "react-simple-typewriter";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";

export const HeaderCustom = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#1A202C",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 20,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <header className="flex flex-col items-center my-64">
            <Particles
                className="z-0"
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
            <div id="particles-js" className="z-10 flex flex-col items-center">
                <p className="text-gray-t">19 ans - développeur</p>
                <h1 className="text-white-c font-ubuntu text-9xl my-6">
                    <Typewriter
                        words={["TangoCh4rlie", "Elouan Reymond"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={3000}
                    />
                </h1>
                <button className="bg-github-v p-3 mt-4 rounded-lg border-black">Contactez-moi</button>
            </div>
        </header>
    );
}

export default HeaderCustom;