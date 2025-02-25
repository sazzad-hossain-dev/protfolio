"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiMessageRounded } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import CustomBtn from "./ui/CustomBtn";
export default function Profile() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="relative lg:sticky left-0 top-20 w-full lg:w-[400px] h-full lg:h-auto opacity-75 p-4 flex flex-col items-center justify-between z-10"
        >
            <div className="w-full bg-[#2C2D2E] backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg">
                <div className="mb-4 lg:mb-8 flex justify-center items-center h-[200px] w-[250px] lg:h-[250px] lg:w-[300px]">
                    <Image
                        className="h-full w-full rounded-xl object-cover"
                        src="/profile.jpg"
                        alt="profile"
                        height={250}
                        width={350}
                    />
                </div>

                <div className="mb-2 text-center">
                    <h1 className="text-white font-custom3 text-2xl lg:text-4xl font-bold opacity-100">
                        Sazzad Hossain
                    </h1>

                    <p className="text-white font-poppins text-base lg:text-lg opacity-100">
                        <Typewriter
                            words={[
                                "Frontend Developer",
                                "React Developer",
                                "Next.js Developer",
                            ]}
                            loop={Infinity}
                            cursor
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>

                    <p className="text-white font-poppins text-base lg:text-lg opacity-100">
                        Sirajganj, Bangladesh
                    </p>
                </div>

                <div className="flex justify-center items-center gap-4 lg:gap-6 mt-2">
                    <Link href={"https://github.com/sazzad-hossain-dev"}>
                        <motion.div
                            className="p-3 rounded-full"
                            whileHover={{ scale: 1.2, background: "#8B48E8" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <LuGithub color="white" size={20} />
                        </motion.div>
                    </Link>
                    <Link href={"https://m.me/s.sd.568089"}>
                        <motion.div
                            className="p-3 rounded-full"
                            whileHover={{ scale: 1.2, background: "#8B48E8" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <BiMessageRounded color="white" size={20} />
                        </motion.div>
                    </Link>
                    <Link href={"/contact"}>
                        <motion.div
                            className="p-3 rounded-full"
                            whileHover={{ scale: 1.2, background: "#8B48E8" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <IoMailOutline color="white" size={20} />
                        </motion.div>
                    </Link>
                </div>

                <CustomBtn text="Let's Talk" />
            </div>
        </motion.div>
    );
}
