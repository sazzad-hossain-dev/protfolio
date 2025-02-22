import ProjectCard from "./ui/ProjectCard";

const Project = () => {
    return (
        <div className="base-container mb-16">
            <h2 className="title">
                Recent Projects and
                <span className="text-[#8B48E8]"> Achievements</span>
            </h2>
            <div className="flex flex-col items-center lg:flex-row  mt-4 gap-20 ">
                <div className="w-full sm:w-auto flex flex-col items-center">
                    <ProjectCard
                        title="Car Hub"
                        discription="Rent a Car"
                        img="/carhub1.png"
                    />
                </div>
                <div className="w-full sm:w-auto flex flex-col items-center">
                    <ProjectCard
                        title="Postit"
                        discription="Posting App"
                        img="/blogapp.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
