import Collabarate from "@/components/Collabarate";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Technology from "@/components/Technology";

export default function Home() {
    return (
        <div className="h-full max-w-[720px]">
            <div className="h-full w-full relative flex flex-col">
                <Hero />
                <Project />
                <Technology />
                <Collabarate />
                <Contact />
            </div>
        </div>
    );
}
