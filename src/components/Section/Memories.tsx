"use client";

import Chip from "@/components/Other/Chip";
import { memories } from "@/constants/model";
import Image from "next/image";
import TextReveal from "@/components/Other/TextReveal";
import { motion } from "framer-motion";

export default function Memories() {
    return (
        <section
            id="memories"
            className="w-full flex flex-col gap-3 lg:gap-5 py-14 px-5 lg:px-14"
        >
            {/* Title */}
            <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl text-center lg:text-left">
                MOMEN
                <span className="text-Blue"> DI TAHUN </span>
                <Chip>2024</Chip>
            </span>
            {/* End Title */}
            {/* Content */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-5 lg:px-0">
                {memories.map((memory: Memory, index: number) => (
                    <div
                        key={index}
                        className="relative overflow-hidden w-full h-full aspect-square bg-stone-100 rounded-xl shadow-sm"
                    >
                        <div className="">
                            <Image
                                src={`${memory.src}`}
                                alt={`${memory.title}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full h-fit absolute bottom-0 left-0 flex flex-col p-3.5 pt-24 lg:pt-16 bg-gradient-to-t from-Blue to-transparent">
                            <span className="text-white font-semibold text-sm lg:text-base">
                                {memory.title}
                            </span>
                            <span className="text-stone-200 font-medium text-xs">
                                {memory.date}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="w-full h-full shrink-0 lg:shrink flex flex-col text-Blue items-center lg:items-start justify-center lg:justify-end px-2 py-6 lg:py-3 lg:px-3 gap-1">
                    <TextReveal
                        text={`"Bagian terbaik tentang foto adalah ketika orang-orang di foto itu berubah, memori yang ada di dalamnya tidak akan berubah."`}
                        className="font-medium 2xl:text-lg text-center lg:text-left"
                    />
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 1.2,
                            },
                        }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                        className="font-semibold text-sm 2xl:text-lg"
                    >
                        <span className="text-Yellow">Andy</span> Warhol.
                    </motion.span>
                </div>
            </div>
            {/* End Content */}
        </section>
    );
}
