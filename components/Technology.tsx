"use client";
import { motion } from "framer-motion";
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
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="base-container mb-16"
        >
            <div>
                <h1 className="title">
                    Tech I Use for Best{" "}
                    <span className="text-[#8B48E8]">Results</span>{" "}
                </h1>
            </div>
            <div>
                <p className="description my-4">
                    I leverage a powerful tech stack to build modern,
                    responsive, and high-performance applications.
                </p>
            </div>
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
        </motion.div>
    );
}
