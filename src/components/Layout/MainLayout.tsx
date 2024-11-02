"use client";

import { HeaderProvider } from "@/context/SettingsContext";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HeaderProvider>{children}</HeaderProvider>;
}
