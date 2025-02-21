import React from "react";

interface HeroDescriptionProps {
    text: string;
    textColor?: string;
    fontSize?: string;
    className?: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({
    text,
    textColor = "text-white",
    fontSize = "text-lg md:text-xl",
    className = "font-custom2 mt-4",
}) => {
    return <p className={`${className} ${fontSize} ${textColor}`}>{text}</p>;
};

export default HeroDescription;
