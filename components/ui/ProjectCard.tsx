"use client";
import Image from "next/image";
const ProjectCard = ({
    img,
    title,
    discription,
}: {
    img: string;
    title: string;
    discription: string;
}) => {
    return (
        <div className="max-w-md relative group transition-all duration-300 w-[300px] rounded-xl  bg-[#2C2D2E] backdrop-blur-sm opacity-95">
            <div className="w-full h-[270px] overflow-hidden">
                <Image
                    src={img}
                    alt={title}
                    height={250}
                    width={600}
                    className="w-full h-full object-center transition-transform duration-200 group-hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h2 className="text-3xl font-custom3 text-white tracking-wide transition-colors duration-200 group-hover:text-[#8B48E8]">
                    {title}
                </h2>
                <p className="text-white font-poppins">{discription}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
