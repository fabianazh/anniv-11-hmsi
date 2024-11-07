import Chip from "@/components/Other/Chip";

export default function History() {
    return (
        <section
            id="history"
            className="w-full lg:h-fit flex flex-col gap-2 bg-white rounded-xl p-4 lg:p-6 shadow-sm"
        >
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
                Pariatur possimus cumque molestiae et ex praesentium annasodn
                asdoasdno aisjoiasd asdjo lroeem ds doloribus, nostrum, libero
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cumque doloremque nostrum similique molestias!
            </span>
            {/* End Content */}
        </section>
    );
}
