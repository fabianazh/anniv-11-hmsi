"use client";

import AppIcon from "@/components/Icon/AppIcon";
import Navbar from "@/components/Partials/Navbar";
import NavButton from "@/components/Partials/NavButton";
import { useHeader } from "@/context/SettingsContext";

export default function Hero() {
    const { isNavOpen, setIsNavOpen } = useHeader();

    return (
        <section
            id="home"
            className="w-full relative h-[95vh] flex flex-col rounded-2xl bg-gradient-to-br from-stone-200 via-stone-50 to-stone-300"
        >
            {/* Header */}
            <div
                className={`w-full h-fit relative top-0 left-0 z-30 transition-all duration-200 flex items-center justify-between py-5 px-8`}
            >
                {/* Logo and Name */}
                <AppIcon />
                {/* End Logo and Name */}
                {/* Navbar */}
                <Navbar />
                <NavButton
                    isOpen={isNavOpen}
                    setIsOpen={setIsNavOpen}
                    containerClassName="flex lg:hidden"
                />
                {/* End Navbar */}
            </div>
            {/* End Header */}

            {/* Content */}
            <div className="w-full flex flex-col relative text-blue-800 gap-28 z-0 px-10 lg:px-40">
                <div className="w-full p-4 h-14"></div>
                <div className="text-3xl lg:text-5xl font-semibold text-center">
                    Happy 11th{" "}
                    <span className="text-yellow-500">Anniversary</span>{" "}
                    <span className="block">HMSI Nusa Putra University</span>
                </div>
                {/* Shape */}
                <div className="absolute -bottom-72 left-1/2 -translate-x-1/2 w-auto">
                    {/* <Image
                    src={'/img/3d.png'}
                    alt=""
                    height={600}
                    width={600}
                    className="w-[35rem] h-fit"
                /> */}
                </div>
                {/* End Shape */}
            </div>
            {/* End Content */}
        </section>
    );
}
