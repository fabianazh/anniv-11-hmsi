import Chip from "@/components/Other/Chip";

export default function Video() {
    return (
        <section
            id="video"
            className="w-full lg:w-4/12 shrink-0 flex flex-col gap-4 lg:gap-6 bg-white rounded-xl p-4 lg:p-6 shadow-sm"
        >
            {/* Title */}
            <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl text-center">
                VIDEO
                <span className="text-Blue"> UCAPAN </span>
                <Chip className="block">ANNIVERSARY HMSI</Chip>
            </span>
            {/* End Title */}
            {/* Content */}
            <div className="w-full flex h-full aspect-video overflow-hidden rounded-xl bg-stone-200">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wCcbKjnC6ak?si=tCuvQ286WYWlPieW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
            {/* End Content */}
        </section>
    );
}
