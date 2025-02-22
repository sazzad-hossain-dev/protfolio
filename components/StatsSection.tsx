import StatsCard from "@/components/ui/StatsCard";
import React from "react";

const statsData = [
    { number: "+2", label: "YEARS OF EXPERIENCE" },
    { number: "+7", label: "PROJECTS COMPLETED" },
    { number: "+3", label: "WORLDWIDE CLIENTS" },
];

const StatsSection: React.FC = () => {
    return (
        <div className="text-white flex gap-6">
            {statsData.map((stat, index) => (
                <StatsCard
                    key={index}
                    number={stat.number}
                    label={stat.label}
                />
            ))}
        </div>
    );
};

export default StatsSection;
