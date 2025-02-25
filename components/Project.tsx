"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
const Project = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="base-container mb-16"
        >
            <h2 className="title">
                Recent Projects and
                <span className="text-[#8B48E8]"> Achievements</span>
            </h2>
            <div className="flex flex-col items-center lg:flex-row  mt-4 gap-20 ">
                <div className="w-full sm:w-auto flex flex-col items-center">
                    <ProjectCard
                        title="Car Hub"
                        discription="Rent a Car"
                        img="/carhub1.png"
                        link="https://car-rent-by-sazzad.vercel.app/"
                    />
                </div>
                <div className="w-full sm:w-auto flex flex-col items-center">
                    <ProjectCard
                        title="Postit"
                        discription="Posting App"
                        img="/blogapp.png"
                        link="https://blogapp-sazzzad.vercel.app/"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Project;
