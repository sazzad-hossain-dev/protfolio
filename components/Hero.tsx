"use client";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";
import TechSlider from "./ui/TechSlider";
const technologies = [
    { name: "logo1", src: "/logo/logo1.png" },
    { name: "logo2", src: "/logo/logo2.png" },
    { name: "logo3", src: "/logo/logo3.png" },
    { name: "logo4", src: "/logo/logo4.png" },
    { name: "logo5", src: "/logo/logo5.png" },
    { name: "logo6", src: "/logo/logo6.png" },
];

const Hero = () => {
    return (
        <div className="base-container mb-16 ">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
                viewport={{ once: true }}
            >
                <h2 className="title  ">
                    Transforming Your Ideas into{" "}
                    <span className="text-[#8B48E8]">Reality</span>
                </h2>
                <p className="description my-4">
                    Passionate about creating intuitive and engaging user
                    experiences. Specialize in transforming ideas into
                    beautifully crafted products.
                </p>

                <StatsSection />

                <TechSlider technologies={technologies} />
            </motion.div>
        </div>
    );
};

export default Hero;
