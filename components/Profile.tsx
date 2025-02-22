"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import CustomBtn from "./ui/CustomBtn";

const TITLES = ["Frontend Developer", "React Developer", "Next.js Developer"];

export default function Profile() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative lg:sticky top-20 w-full lg:w-[400px] h-auto p-4 flex flex-col items-center z-10">
            {/* Profile Card */}
            <div className="w-full bg-[#2C2D2E] backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg">
                {/* Profile Image */}
                <div className="mb-4 lg:mb-8 flex justify-center items-center h-[200px] w-[250px] lg:h-[250px] lg:w-[300px]">
                    <Image
                        className="h-full w-full rounded-xl object-cover"
                        src="/profile.jpg"
                        alt="profile"
                        height={250}
                        width={300}
                    />
                </div>

                {/* Name and Title Animation */}
                <div className="mb-2 text-center">
                    <h1 className="text-white text-2xl lg:text-3xl font-bold">
                        Sazzad Hossain
                    </h1>
                    <p className="text-white text-lg lg:text-xl opacity-80 mb-2">
                        {TITLES[index]}
                    </p>
                    <p className="text-white text-base lg:text-lg opacity-60">
                        Sirajganj, Bangladesh
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-4 lg:gap-6 mt-2">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <CiTwitter color="white" size={20} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <IoLogoInstagram color="white" size={20} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <CiFacebook color="white" size={20} />
                    </motion.div>
                </div>

                {/* CTA Button */}
                <CustomBtn text="Let's Talk" />
            </div>
        </div>
    );
}
