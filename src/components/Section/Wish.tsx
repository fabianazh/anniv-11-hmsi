"use client";

import TextReveal from "@/components/Other/TextReveal";

export default function Wish() {
    return (
        <section
            id="wish"
            className="relative h-auto w-full flex flex-col lg:flex-row text-Blue py-14 px-5 lg:px-14 lg:items-end gap-2"
        >
            <div className="w-full lg:w-4/12 shrink-0 flex justify-center lg:justify-normal">
                {/* Title */}
                <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl">
                    DOA
                    <span className="lg:block">
                        <span className="text-Blue"> & HARAPAN</span>
                    </span>
                </span>
                {/* End Title */}
            </div>
            {/* Wish */}
            <div className="flex flex-col gap-1">
                <TextReveal
                    text={`"Setiap detik yang kita lalui adalah perjalanan penuh momen berharga, bukti pencapaian luar biasa yang terukir dari kekuatan dan solidaritas kita. Mari terus menjaga semangat persatuan, saling mendorong untuk maju, dan berinovasi demi kemajuan himpunan tercinta. Bersama, tidak ada yang tidak mungkin!!"`}
                    className="block text-base lg:text-lg 2xl:text-xl text-center lg:text-left font-medium"
                />
            </div>
            {/* End Wish */}
        </section>
    );
}
