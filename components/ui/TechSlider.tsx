"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroDescription from "./HeroDiscription";

interface Tech {
    src: string;
    name: string;
}

interface TechSliderProps {
    technologies: Tech[];
    speed?: number;
    reverse?: boolean;
}

const TechSlider: React.FC<TechSliderProps> = ({
    technologies,
    speed = 10,
    reverse = true,
}) => {
    const repeatedLogos = [...technologies, ...technologies, ...technologies];

    return (
        <div className=".base-container relative w-full overflow-hidden mt-4 ">
            <p className="description">
                Relied on by companies near, far, and worldwide
            </p>
            <motion.div
                className="flex min-w-full gap-16 mt-4"
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                }}
                style={{ display: "flex" }}
            >
                {repeatedLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 hover:grayscale transition-all duration-300"
                    >
                        <Image
                            src={tech.src}
                            alt={tech.name}
                            height={100}
                            width={150}
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechSlider;
