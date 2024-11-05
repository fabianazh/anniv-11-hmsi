import Image from "next/image";
import Chip from "../Other/Chip";

export default function Hisory() {
    return (
        <section
            id="hisory"
            className="relative h-auto w-full bg-white/60 z-20 flex flex-col lg:flex-row text-Blue py-14 px-2 lg:px-10 gap-5 lg:gap-8"
        >
            {/* Left Content */}
            <div className="w-full lg:w-fit flex flex-col justify-center lg:justify-normal gap-2">
                {/* Title */}
                <span className="block text-Yellow font-bold lg:font-bold text-2xl lg:text-3xl text-center lg:text-left">
                    SEJARAH
                    <span className="text-Blue"> SINGKAT </span>
                    <Chip>HMSI</Chip>
                </span>
                {/* End Title */}
                {/* Content */}
                <div className="hidden lg:block">
                    <span className="block text-base lg:text-lg text-left font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur possimus cumque molestiae et ex praesentium
                        annasodn asdoasdno aisjoiasd asdjo lroeem ds doloribus,
                        nostrum, libero Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Fuga cumque doloremque nostrum
                        similique molestias!
                    </span>
                </div>
                {/* End Content */}
            </div>
            {/* End Left Content */}
            {/* Right Content */}
            <div className="w-full lg:w-4/12 shrink-0 flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full h-fit flex rounded-xl overflow-hidden">
                    <Image
                        src="/img/memories/pelantikan.jpeg"
                        alt="HMSI Logo"
                        width={400}
                        height={600}
                        className="w-fit h-full"
                    />
                </div>
                {/* End Image */}
                {/* Content */}
                <div className="block lg:hidden">
                    <span className="block text-base lg:text-lg text-left font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur possimus cumque molestiae et ex praesentium
                        annasodn asdoasdno aisjoiasd asdjo lroeem ds doloribus,
                        nostrum, libero Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Fuga cumque doloremque nostrum
                        similique molestias!
                    </span>
                </div>
                {/* End Content */}
            </div>
            {/* End Right Content */}
        </section>
    );
}
