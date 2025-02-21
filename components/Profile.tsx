"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { useEffect, useState } from "react";
import CustomBtn from "./ui/CustomBtn";

const TITLES = ["Frontend Developer", "React Developer", "Next.js Developer"];

export default function Profile() {
    const [index, setIndex] = useState(0);
    const buttonText = "Let's Talk";

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative lg:sticky left-0 top-20 w-full lg:w-[400px] h-full lg:h-auto opacity-[0.7] p-4 flex flex-col items-center justify-between z-10 ">
            <div className="w-full h-full bg-[#2C2D2E] backdrop-blur-lg p-4 rounded-xl flex flex-col items-center justify-between">
                <div className="mb-4 lg:mb-8 flex justify-center items-center h-[200px] w-[250px] lg:h-[250px] lg:w-[300px]">
                    <Image
                        className="h-full w-full rounded-xl object-cover"
                        src="/profile.jpg"
                        alt="profile"
                        height={250}
                        width={300}
                    />
                </div>

                <div className="mb-2 text-center">
                    <h1 className="text-white text-2xl lg:text-3xl font-bold font-custom3 tracking-wide">
                        Sazzad Hossain
                    </h1>
                    <div className="text-white text-lg lg:text-xl opacity-80 mb-2">
                        <p className="font-custom2">{TITLES[index]}</p>
                    </div>
                    <div className="text-white text-base lg:text-lg opacity-60">
                        <p className="font-custom2">Sirajganj, Bangladesh</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 lg:gap-6 mt-2">
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "#ffffff30",
                            borderRadius: "50%",
                            transition: { duration: 0.3 },
                        }}
                        className="p-2"
                    >
                        <CiTwitter color="white" size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "#ffffff30",
                            borderRadius: "50%",
                            transition: { duration: 0.3 },
                        }}
                        className="p-2"
                    >
                        <IoLogoInstagram color="white" size={20} />
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "#ffffff30",
                            borderRadius: "50%",
                            transition: { duration: 0.3 },
                        }}
                        className="p-2"
                    >
                        <CiFacebook color="white" size={20} />
                    </motion.div>
                </div>

                <CustomBtn text="Let's Talk" />
            </div>
        </div>
    );
}
