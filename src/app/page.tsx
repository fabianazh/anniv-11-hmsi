import Hero from "@/components/Section/Hero";
import History from "@/components/Section/History";
import Wish from "@/components/Section/Wish";
import Message from "@/components/Section/Message";
import MainLayout from "@/components/Layout/MainLayout";
import Jargon from "@/components/Section/Jargon";
import Video from "@/components/Section/Video";
import Memories from "@/components/Section/Memories";

export async function generateMetadata() {
    return {
        title: `11th Anniversary HMSI`,
        description: "desc..",
        keywords: [
            "HMSI",
            "Nusa Putra",
            "Universitas Nusa Putra",
            "Nusa Putra University",
            "Anniversary",
            "HMSI Anniversary",
            "HMSI Nusa Putra Anniversary",
            "HMSI Nusa Putra University Anniversary",
            "Anniversary HMSI",
            "11th Anniversary HMSI",
            "11 th Anniversary HMSI",
            "Anniversary HMSI ke-11",
            "Anniversary HMSI 11",
            "Ulang Tahun HMSI",
            "Ulang Tahun HMSI ke-11",
            "Ulang Tahun HMSI 11",
            "HMSI Nusa Putra",
            "Sistem Informasi",
            "Jurusan Sistem Informasi",
            "Sistem Informasi Nusa Putra",
            "Sistem Informasi Nusa Putra Angkatan 24",
            "Sistem Informasi Nusa Putra Angkatan 2024",
            "Sistem Informasi Angkatan 2024",
            "Sistem Informasi Angkatan 24",
            "Angkatan 24",
            "Nusa Putra Angkatan 2024",
            "Jurusan Sistem Informasi Nusa Putra",
            "Himpunan Mahasiswa Sistem Informasi Nusa Putra",
            "Himpunan Mahasiswa Sistem Informasi Universitas Nusa Putra",
            "Himpunan Mahasiswa Sistem Informasi Universitas Nusa Putra",
            "SI24",
            "SI24A",
            "SI24C",
            "SI24E",
            "SI24F",
            "SI24I",
        ],
        robots: "index, follow",
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        openGraph: {
            title: `11th Anniversary HMSI`,
            description: "11th Anniversary HMSI",
            images: [""],
        },
    };
}

export default function HomePage() {
    return (
        <MainLayout>
            <Hero />
            <Message />
            <div className="relative h-auto w-full bg-stone-50 z-20 flex flex-col lg:flex-row text-Blue py-10 lg:py-14 px-5 lg:px-14 gap-5 lg:gap-8">
                <div className="w-full lg:w-fit flex flex-col flex-grow justify-center lg:justify-normal gap-5 lg:gap-4">
                    <History />
                    <Jargon />
                </div>
                <Video />
            </div>
            <Memories />
            <Wish />
        </MainLayout>
    );
}
