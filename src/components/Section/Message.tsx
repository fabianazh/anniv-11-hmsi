import AppIcon from "../Icon/AppIcon";

export default function Message() {
    return (
        <section
            id="message"
            className="relative h-auto w-full bg-white/60 z-20 flex flex-col lg:flex-row text-blue-800 py-14 px-10 lg:px-10 lg:items-end gap-2"
        >
            <div className="w-full lg:w-4/12 shrink-0 flex justify-center lg:justify-normal">
                {/* Title */}
                <span className="block text-blue-700 font-bold text-xl lg:text-3xl">
                    Pesan
                    <span className="lg:block">
                        <span className="text-yellow-400"> Dari</span> SI24
                    </span>
                </span>
                {/* End Title */}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
                <span className="block text-lg lg:text-2xl text-center font-medium">
                    &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Pariatur possimus cumque molestiae et ex praesentium
                    annasodn asdoasdno aisjoiasd asdjo lroeem ds doloribus,
                    nostrum, libero&quot;
                </span>
            </div>
            {/* End Message */}
        </section>
    );
}
