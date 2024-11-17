"use client";

import Chip from "@/components/Other/Chip";
import TextReveal from "@/components/Other/TextReveal";

export default function History() {
    return (
        <section
            id="history"
            className="w-full lg:h-full flex flex-col gap-2 bg-white rounded-xl p-4 lg:p-6 shadow-sm"
        >
            {/* Title */}
            <span className="block text-Yellow font-bold lg:font-bold text-xl lg:text-3xl text-center lg:text-left">
                SEJARAH
                <span className="text-Blue"> SINGKAT </span>
                <Chip>HMSI</Chip>
            </span>
            {/* End Title */}
            {/* Content */}
            <TextReveal
                text={`Himpunan Mahasiswa Sistem Informasi (HMSI) Nusa Putra didirikan pada tanggal 7 Oktober 2014. Sebelum terbentuknya HMSI, organisasi mahasiswa di jurusan ini merupakan gabungan dari dua program studi, yaitu Teknik Informatika dan Sistem Informasi, dengan nama SITI. Namun, seiring berjalannya waktu, mahasiswa Sistem Informasi memutuskan untuk membentuk himpunannya sendiri.`}
                className="block text-base lg:text-lg 2xl:text-xl text-left font-medium"
            />
            {/* End Content */}
        </section>
    );
}
