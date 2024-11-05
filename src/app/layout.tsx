import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import SmoothScroll from "@/components/Other/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: ["11th Anniversary HMSI"],
    title: {
        default: "11th Anniversary HMSI",
        template: "%s | 11th Anniversary HMSI",
    },
    description: "desc..",
    openGraph: {
        title: "11th Anniversary HMSI",
        description: "desc..",
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
