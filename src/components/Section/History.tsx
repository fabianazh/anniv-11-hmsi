import Image from "next/image";
import Chip from "../Other/Chip";

export default function Hisory() {
    return (
        <section
            id="hisory"
            className="relative h-auto w-full bg-stone-50 z-20 flex flex-col lg:flex-row text-Blue py-10 lg:py-14 px-5 lg:px-14 gap-5 lg:gap-8"
        >
            {/* Left Content */}
            <div className="w-full lg:w-fit flex flex-col flex-grow justify-center lg:justify-normal gap-5 lg:gap-4">
                {/* Left Top Content */}
                <div className="w-full lg:h-full flex flex-col gap-2 lg:gap-4 bg-white rounded-xl p-4 lg:p-6 shadow-sm">
                    {/* Title */}
                    <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl text-center lg:text-left">
                        SEJARAH
                        <span className="text-Blue"> SINGKAT </span>
                        <Chip>HMSI</Chip>
                    </span>
                    {/* End Title */}
                    {/* Content */}
                    <span className="block text-base lg:text-lg text-left font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur possimus cumque molestiae et ex praesentium
                        annasodn asdoasdno aisjoiasd asdjo lroeem ds doloribus,
                        nostrum, libero Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Fuga cumque doloremque nostrum
                        similique molestias!
                    </span>
                    {/* End Content */}
                </div>
                {/* End Left Top Content */}
                {/* Left Bottom Content */}
                <div className="w-full flex flex-col gap-2 lg:gap-4 bg-white rounded-xl p-4 lg:p-6 shadow-sm">
                    {/* Title */}
                    <span className="block text-Blue font-bold lg:font-bold text-xl lg:text-2xl text-center lg:text-left">
                        BERANI
                        <span className="text-Yellow"> MELANGKAH </span>,
                        MENGUKIR
                        <span className="text-Yellow"> SEJARAH </span>
                    </span>
                    {/* End Title */}
                </div>
                {/* End Left Bottom Content */}
            </div>
            {/* End Left Content */}
            {/* Right Content */}
            <div className="w-full lg:w-4/12 shrink-0 flex flex-col gap-4 lg:gap-6 bg-white rounded-xl p-4 lg:p-6 shadow-sm">
                {/* Title */}
                <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl text-center lg:text-left">
                    VIDEO
                    <span className="text-Blue"> UCAPAN </span>
                    <Chip>ANNIVERSARY</Chip>
                </span>
                {/* End Title */}
                {/* Content */}
                <div className="w-full flex h-full aspect-video overflow-hidden rounded-xl bg-stone-200">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kn0iBoEJLL4?si=XrSR5r8-U4eWzhRo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                {/* End Content */}
            </div>
            {/* End Right Content */}
        </section>
    );
}
