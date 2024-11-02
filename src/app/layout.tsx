import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import SmoothScroll from "@/components/Other/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: ["App Name"],
    title: {
        default: "App Name",
        template: "%s | App Name",
    },
    description: "desc..",
    openGraph: {
        title: "App Name",
        description: "desc..",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        siteName: "App Name",
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
            <body className={montserrat.className}>
                <Analytics />
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
