import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import SmoothScroll from "@/components/Other/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
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
        "Information System",
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
        "Berani melangkah, Mengukir Sejarah",
        "Berani melangkah , Mengukir Sejarah",
        "Analisis Sistemnya, Berikan Informasinya",
        "Analisis Sistemnya , Berikan Informasinya",
        "SI Berprestasi",
        "SI , Berpestasi",
        "SItizen",
    ],
    title: {
        default: "11th Anniversary HMSI",
        template: "%s | 11th Anniversary HMSI",
    },
    description:
        "Happy Anniversary HMSI yang ke-11 dari kami, Mahasiswa Sistem Informasi Angakatan 24. Kami bangga menjadi bagian dari himpunan ini dan berterima kasih atas semua kesempatan, momen dan ilmu yang diberikan. Sukses selalu HMSI!!",
    openGraph: {
        title: "11th Anniversary HMSI",
        description:
            "Happy Anniversary HMSI yang ke-11 dari kami, Mahasiswa Sistem Informasi Angakatan 24. Kami bangga menjadi bagian dari himpunan ini dan berterima kasih atas semua kesempatan, momen dan ilmu yang diberikan. Sukses selalu HMSI!!",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        siteName: "11th Anniversary HMSI",
        locale: "id_ID",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Analytics />
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
