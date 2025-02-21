import Image from "next/image";
interface techCard {
    src: string;
    name: string;
    discription: string;
}
const TechnologyCard = ({ src, name, discription }: techCard) => {
    return (
        <div className="bg-[#2C2D2E] text-white flex gap-2 backdrop-blur-lg py-2 px-6 opacity-[0.8] rounded-xl w-[330px] hover:bg-[#8B48E8] duration-150">
            <Image src={src} alt="react" height={120} width={75} />
            <div>
                <h2 className="text-lg lg:text-3xl md:text-xl  font-custom3">
                    {name}
                </h2>
                <p className="text-sm md:text-base lg:text-xl font-poppins">
                    {discription}
                </p>
            </div>
        </div>
    );
};

export default TechnologyCard;
