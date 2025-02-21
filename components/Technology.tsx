"use client";
import { motion } from "framer-motion";
import HeroDescription from "./ui/HeroDiscription";
import TechnologyCard from "./ui/TechnologyCard";

export default function Technology() {
    const techCardData = [
        { logo: "/logos/re.svg", title: "React", category: "Frontend" },
        {
            logo: "/logos/tail.svg",
            title: "Tailwind CSS",
            category: "Frontend",
        },
        { logo: "/logos/next.svg", title: "Next.js", category: "Frontend" },
        { logo: "/logos/ts.svg", title: "TypeScript", category: "Frontend" },
        {
            logo: "/logos/redux.svg",
            title: "Redux",
            category: "State Management",
        },
        {
            logo: "/logos/framer.svg",
            title: "Motion",
            category: "Animation",
        },
        {
            logo: "/logos/git.svg",
            title: "GitHub",
            category: "Version Control",
        },
        {
            logo: "/logos/imagekit.svg",
            title: "ImageKit",
            category: "Image Storage",
        },
    ];

    return (
        <div className="base-container mb-16">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">
                    Tech I Use for Best{" "}
                    <span className="text-[#8B48E8]">Results</span>{" "}
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="description my-4">
                    I leverage a powerful tech stack to build modern,
                    responsive, and high-performance applications.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {techCardData.map(({ logo, title, category }, index) => (
                    <TechnologyCard
                        src={logo}
                        name={title}
                        discription={category}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
