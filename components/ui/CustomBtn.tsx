import { motion } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.03;

const CustomBtn = ({ text }: { text: string }) => {
    return (
        <motion.button
            initial="initial"
            whileHover="hovered"
            className="relative inline-block overflow-hidden whitespace-nowrap mt-4 lg:mt-6 px-6 py-3 text-white text-lg font-bold bg-blue-600 rounded-lg focus:outline-none"
        >
            <div className="relative flex">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="relative inline-block overflow-hidden"
                    >
                        <motion.span
                            variants={{
                                initial: { y: "0%" },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className="block"
                        >
                            {char}
                        </motion.span>

                        <motion.span
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: "0%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className="block absolute left-0 top-0"
                        >
                            {char}
                        </motion.span>
                    </span>
                ))}
            </div>
        </motion.button>
    );
};

export default CustomBtn;
