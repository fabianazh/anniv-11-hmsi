"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function useHeader() {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error("useHeader must be used within a HeaderProvider");
    }
    return context;
}

export function HeaderProvider({ children }: { children: ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <HeaderContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </HeaderContext.Provider>
    );
}
