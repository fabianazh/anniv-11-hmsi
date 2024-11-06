"use client";

import { HeaderProvider } from "@/context/SettingsContext";
import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HeaderProvider>
            <Header />
            <main className="relative w-full h-auto">{children}</main>
            <Footer />
        </HeaderProvider>
    );
}
