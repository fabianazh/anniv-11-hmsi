"use client";

import AppIcon from "@/components/Icon/AppIcon";
import Navbar from "@/components/Partials/Navbar";
import NavButton from "@/components/Partials/NavButton";
import { useHeader } from "@/context/SettingsContext";
import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Hero() {
    const { isNavOpen, setIsNavOpen } = useHeader();

    return (
        <section id="home" className="relative w-full h-fit p-4 lg:p-5">
            {/* Hero Container */}
            <div className="w-full relative h-[75vh] lg:h-[95vh] flex flex-col rounded-2xl bg-gradient-to-b shadow-sm from-stone-100 via-stone-50 to-stone-200 overflow-hidden">
                {/* Header */}
                <header
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
                </header>
                {/* End Header */}

                {/* Content */}
                <div className="w-full flex flex-col relative text-Blue gap-2 lg:gap-5 z-0 px-3 lg:px-40 py-28 items-center">
                    {/* Logo */}
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
                    {/* End Logo */}
                    {/* Text */}
                    <div className="w-full flex flex-col text-2xl lg:text-5xl font-semibold text-center gap-1 lg:gap-2.5">
                        <span>
                            Happy 11th{" "}
                            <span className="text-Yellow">Anniversary</span>{" "}
                        </span>{" "}
                        <span className="block">
                            HMSI Nusa Putra University
                        </span>
                    </div>
                    {/* End Text */}
                    {/* Contact */}
                    <div className="w-fit flex bg-Blue text-white px-6 lg:px-20 py-1.5 gap-5 lg:gap-8 justify-center items-center rounded-lg">
                        <Link
                            href={"https://www.instagram.com/hmsi.nsp/"}
                            className="w-fit flex gap-1 items-center"
                        >
                            <BiLogoInstagram className="text-sm lg:text-base" />
                            <span className="text-xs lg:text-sm">hmsi.nsp</span>
                        </Link>
                        <Link
                            href={"https://www.tiktok.com/@hmsi.nsp/"}
                            className="w-fit flex gap-1 items-center"
                        >
                            <BiLogoTiktok className="text-sm lg:text-base" />
                            <span className="text-xs lg:text-sm">hmsinsp</span>
                        </Link>
                        <Link
                            href={
                                "https://www.youtube.com/@hmsiuniversitasnusaputra298"
                            }
                            className="w-fit flex gap-1 items-center"
                        >
                            <BiLogoYoutube className="text-sm lg:text-base" />
                            <span className="text-xs lg:text-sm">HMSI UNP</span>
                        </Link>
                    </div>
                    {/* End Contact */}
                </div>
                {/* End Content */}

                {/* Card Container */}
                {/* Left Cards */}
                <motion.div
                    initial={{
                        left: "var(--l1-left-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        left: "var(--l1-left-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.05,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-Blue w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-20 -bottom-32 lg:-bottom-36 -rotate-[35deg]
                [--l1-left-init:-7rem] [--l1-left-view:-1rem]
                lg:[--l1-left-init:-7rem] lg:[--l1-left-view:-2rem]"
                ></motion.div>
                <motion.div
                    initial={{
                        left: "var(--l2-left-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        left: "var(--l2-left-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.1,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-Yellow w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-10 -bottom-36 lg:-bottom-44 -rotate-[35deg]
                [--l2-left-init:-4rem] [--l2-left-view:1.5rem]
                lg:[--l2-left-init:-8rem] lg:[--l2-left-view:2.5rem]"
                ></motion.div>
                <motion.div
                    initial={{
                        left: "var(--l3-left-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        left: "var(--l3-left-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.15,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-yellow-400 w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-0 -bottom-40 lg:-bottom-48 -rotate-[35deg]
                [--l3-left-init:-4rem] [--l3-left-view:4rem]
                lg:[--l3-left-init:-12rem] lg:[--l3-left-view:5.5rem]"
                ></motion.div>
                {/* End Left Cards */}
                {/* Right Cards */}
                <motion.div
                    initial={{
                        right: "var(--r1-right-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        right: "var(--r1-right-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.05,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-Blue w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-20 -bottom-32 lg:-bottom-36 rotate-[35deg]
                [--r1-right-init:-7rem] [--r1-right-view:-1rem]
                lg:[--r1-right-init:-7rem] lg:[--r1-right-view:-2rem]"
                ></motion.div>
                <motion.div
                    initial={{
                        right: "var(--r2-right-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        right: "var(--r2-right-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.1,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-Yellow w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-10 -bottom-36 lg:-bottom-44 rotate-[35deg]
                [--r2-right-init:-4rem] [--r2-right-view:1.5rem]
                lg:[--r2-right-init:-8rem] lg:[--r2-right-view:2.5rem]"
                ></motion.div>
                <motion.div
                    initial={{
                        right: "var(--r3-right-init)",
                        opacity: 0,
                    }}
                    whileInView={{
                        right: "var(--r3-right-view)",
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.15,
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="bg-yellow-400 w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-0 -bottom-40 lg:-bottom-48 rotate-[35deg]
                [--r3-right-init:-4rem] [--r3-right-view:4rem]
                lg:[--r3-right-init:-12rem] lg:[--r3-right-view:5.5rem]"
                ></motion.div>
                {/* End Right Cards */}
                {/* End Card Container */}
            </div>
            {/* End Hero Container */}
        </section>
    );
}
