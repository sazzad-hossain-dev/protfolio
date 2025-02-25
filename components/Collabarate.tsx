"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Collabarate = () => {
    // State to track hover on the parent div
    const [isHovered, setIsHovered] = useState(false);

    // Variants for the parent motion div
    const parentVariants = {
        initial: {},
    };

    // Variants for the child components (arrows)
    const arrowVariants = {
        initial: { y: 0, rotate: 315, opacity: 1 },
        hovered: {
            y: -55,
            x: 48,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
        },
    };

    const secondArrowVariants = {
        initial: { rotate: 315, opacity: 0, y: 20, x: -50 },
        hovered: {
            opacity: 1,
            y: -55,
            x: 48,
            transition: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
        },
    };

    return (
        <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="base-container bg-container mb-16 group flex justify-center gap-2 hover:bg-[#8B48E8]"
            variants={parentVariants}
            whileHover="hovered"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="max-w-[540px]">
                <h2 className="title">
                    Let&apos;s{" "}
                    <span className="text-[#8B48E8] group-hover:text-white">
                        Collaborate
                    </span>
                </h2>
                <p className="description">
                    Unlock the potential of your product with expert design and
                    development services. Let&apos;s collaborate to create
                    user-centered solutions that not only meet your goals but
                    also delight your users.
                </p>
            </div>

            {/* Fixed aspect ratio with square for perfect rounded effect */}
            <div className="w-[18rem] h-16 lg:w-16 lg:h-16  bg-[#8353b3] overflow-hidden rounded-full flex justify-center items-center relative group-hover:bg-white">
                <motion.img
                    src="/arrow.svg"
                    alt="arrow"
                    height={40}
                    width={30}
                    className="transition-all duration-300 brightness-100"
                    variants={arrowVariants}
                    initial="initial"
                    animate={isHovered ? "hovered" : "initial"}
                />

                <motion.img
                    src="/arrow.svg"
                    alt="second arrow"
                    height={40}
                    width={30}
                    className="invert absolute top-[70px] left-[-30px]"
                    variants={secondArrowVariants}
                    initial="initial"
                    animate={isHovered ? "hovered" : "initial"}
                />
            </div>
        </motion.div>
    );
};

export default Collabarate;
