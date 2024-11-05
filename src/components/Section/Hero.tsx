"use client";

import AppIcon from "@/components/Icon/AppIcon";
import Navbar from "@/components/Partials/Navbar";
import NavButton from "@/components/Partials/NavButton";
import { useHeader } from "@/context/SettingsContext";
import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";

export default function Hero() {
    const { isNavOpen, setIsNavOpen } = useHeader();

    return (
        <section
            id="home"
            className="w-full relative h-[75vh] lg:h-[95vh] flex flex-col rounded-2xl bg-gradient-to-br shadow-sm from-stone-100 via-stone-50 to-stone-200"
        >
            {/* Header */}
            <div
                className={`w-full h-fit relative top-0 left-0 z-30 transition-all duration-200 flex items-center justify-between py-3 lg:py-5 px-5 lg:px-8`}
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
            <div className="w-full flex flex-col relative text-Blue gap-2 lg:gap-5 z-0 px-3 lg:px-40 py-28 items-center">
                <div className="w-full p-4 h-20 lg:h-28 flex gap-4 justify-center">
                    <Image
                        src="/img/logo/npu.png"
                        alt="NPU Logo"
                        width={300}
                        height={300}
                        className="w-fit h-full"
                    />
                    <Image
                        src="/img/logo/hmsi.png"
                        alt="HMSI Logo"
                        width={300}
                        height={300}
                        className="w-fit h-full"
                    />
                </div>
                <div className="w-full flex flex-col text-2xl lg:text-5xl font-semibold text-center gap-1 lg:gap-2.5">
                    <span>
                        Happy 11th{" "}
                        <span className="text-Yellow">Anniversary</span>{" "}
                    </span>{" "}
                    <span className="block">HMSI Nusa Putra University</span>
                </div>
                <div className="w-fit flex bg-Blue text-white px-10 lg:px-20 py-1.5 gap-5 lg:gap-8 justify-center items-center rounded-lg">
                    <Link
                        href={"https://www.instagram.com/hmsi.nsp/"}
                        className="w-fit flex gap-1 items-center"
                    >
                        <BiLogoInstagram className="text-sm lg:text-base" />
                        <span className="text-xs lg:text-sm">hmsi.nsp</span>
                    </Link>
                    <Link
                        href={"https://www.instagram.com/hmsi.nsp/"}
                        className="w-fit flex gap-1 items-center"
                    >
                        <BiLogoTiktok className="text-sm lg:text-base" />
                        <span className="text-xs lg:text-sm">hmsi.nsp</span>
                    </Link>
                    <Link
                        href={"https://www.instagram.com/hmsi.nsp/"}
                        className="w-fit flex gap-1 items-center"
                    >
                        <BiLogoYoutube className="text-sm lg:text-base" />
                        <span className="text-xs lg:text-sm">hmsi.nsp</span>
                    </Link>
                </div>
            </div>
            {/* End Content */}
        </section>
    );
}
