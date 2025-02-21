import React from "react";

interface HeroTextProps {
    text: string;
    highlight?: string;
    textColor?: string;
    highlightColor?: string;
    fontSize?: string;
    className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({
    text,
    highlight,
    textColor = "#c6c9cf",
    highlightColor = "#421470",
    fontSize = "text-4xl md:text-6xl lg:text-7xl",
    className = "font-custom3",
}) => {
    return (
        <h2 className={`${fontSize} ${className} text-[${textColor}]`}>
            {text.split(highlight || " ").map((part, index) =>
                index === 0 ? (
                    part
                ) : (
                    <span key={index} className={`text-[${highlightColor}]`}>
                        {highlight}
                    </span>
                )
            )}
        </h2>
    );
};

export default HeroText;
