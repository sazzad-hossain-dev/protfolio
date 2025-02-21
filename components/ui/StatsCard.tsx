import React from "react";

interface StatsCardProps {
    number: string;
    label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label }) => {
    return (
        <div className="w-full md:w-1/3 ">
            <h1 className="title">{number}</h1>
            <p className="description">{label}</p>
        </div>
    );
};

export default StatsCard;
