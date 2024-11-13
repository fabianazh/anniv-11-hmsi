"use client";

import AppIcon from "@/components/Icon/AppIcon";
import Navbar from "@/components/Partials/Navbar";
import NavButton from "@/components/Partials/NavButton";
import { useHeader } from "@/context/SettingsContext";
import Image from "next/image";
import Link from "next/link";
import {
    BiLogoInstagramAlt,
    BiLogoTiktok,
    BiLogoYoutube,
} from "react-icons/bi";
import { motion } from "framer-motion";

export default function Hero() {
    const { isNavOpen, setIsNavOpen } = useHeader();

    return (
        <section id="home" className="relative w-full h-fit p-4 lg:p-5 2xl:p-7">
            {/* Hero Container */}
            <div className="w-full relative h-[75vh] lg:h-[95vh] flex flex-col rounded-2xl bg-gradient-to-b shadow from-blue-50 via-white to-blue-100 overflow-hidden">
                {/* Header */}
                <header
                    className={`w-full h-fit relative top-0 left-0 z-30 transition-all duration-200 flex items-start justify-between py-5 px-5 lg:px-8`}
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
                <div className="w-full flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-Blue gap-2 lg:gap-5 z-0 px-3 lg:px-40 items-center">
                    {/* Logo */}
                    <div className="w-full p-4 h-20 lg:h-28 2xl:h-32 flex gap-4 justify-center">
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
                    <div className="w-full flex flex-col text-2xl lg:text-5xl 2xl:text-6xl font-semibold text-center gap-1 lg:gap-2.5">
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
                            className="w-fit flex gap-1 items-center text-white hover:text-stone-300 transition-colors duration-300"
                        >
                            <BiLogoInstagramAlt className="text-sm lg:text-base 2xl:text-lg" />
                            <span className="text-xs lg:text-sm 2xl:text-base">
                                hmsi.nsp
                            </span>
                        </Link>
                        <Link
                            href={"https://www.tiktok.com/@hmsinsp/"}
                            className="w-fit flex gap-1 items-center text-white hover:text-stone-300 transition-colors duration-300"
                        >
                            <BiLogoTiktok className="text-sm lg:text-base 2xl:text-lg" />
                            <span className="text-xs lg:text-sm 2xl:text-base">
                                hmsinsp
                            </span>
                        </Link>
                        <Link
                            href={
                                "https://www.youtube.com/@hmsiuniversitasnusaputra298"
                            }
                            className="w-fit flex gap-1 items-center text-white hover:text-stone-300 transition-colors duration-300"
                        >
                            <BiLogoYoutube className="text-sm lg:text-base 2xl:text-lg" />
                            <span className="text-xs lg:text-sm 2xl:text-base">
                                HMSI UNP
                            </span>
                        </Link>
                    </div>
                    {/* End Contact */}
                </div>
                {/* End Content */}

                {/* Card Container */}
                {/* Left Cards */}
                {/* Left Blue */}
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
                    className="bg-Blue w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-20 -bottom-32 lg:-bottom-36 2xl:-bottom-28 -rotate-[35deg]
                [--l1-left-init:-7rem] [--l1-left-view:-2rem]
                lg:[--l1-left-init:-7rem] lg:[--l1-left-view:-2rem]
                2xl:[--l1-left-init:-7rem] 2xl:[--l1-left-view:0rem]"
                ></motion.div>
                {/* End Left Blue */}
                {/* Left Orange */}
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
                    className="bg-Yellow w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-10 -bottom-36 lg:-bottom-44 2xl:-bottom-36 -rotate-[35deg]
                [--l2-left-init:-4rem] [--l2-left-view:0.5rem]
                lg:[--l2-left-init:-8rem] lg:[--l2-left-view:2.5rem]
                2xl:[--l2-left-init:-8rem] 2xl:[--l2-left-view:4.5rem]"
                ></motion.div>
                {/* End Left Orange */}
                {/* Left Yellow */}
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
                    className="bg-yellow-400 w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-0 -bottom-40 lg:-bottom-48 2xl:-bottom-40 -rotate-[35deg]
                [--l3-left-init:-4rem] [--l3-left-view:3rem]
                lg:[--l3-left-init:-12rem] lg:[--l3-left-view:5.5rem]
                2xl:[--l3-left-init:-12rem] 2xl:[--l3-left-view:7.5rem]"
                ></motion.div>
                {/* End Left Yellow */}
                {/* End Left Cards */}
                {/* Right Cards */}
                {/* Right Blue */}
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
                    className="bg-Blue w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-20 -bottom-32 lg:-bottom-36 2xl:-bottom-28 rotate-[35deg]
                [--r1-right-init:-7rem] [--r1-right-view:-2rem]
                lg:[--r1-right-init:-7rem] lg:[--r1-right-view:-2rem]
                2xl:[--r1-right-init:-7rem] 2xl:[--r1-right-view:0rem]"
                ></motion.div>
                {/* End Right Blue */}
                {/* Right Orange */}
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
                    className="bg-Yellow w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-10 -bottom-36 lg:-bottom-44 2xl:-bottom-36 rotate-[35deg]
                [--r2-right-init:-4rem] [--r2-right-view:0.5rem]
                lg:[--r2-right-init:-8rem] lg:[--r2-right-view:2.5rem]
                2xl:[--r2-right-init:-8rem] 2xl:[--r2-right-view:4.5rem]"
                ></motion.div>
                {/* End Right Orange */}
                {/* Right Yellow */}
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
                    className="bg-yellow-400 w-32 lg:w-48 h-60 lg:h-72 rounded-xl shadow absolute z-0 -bottom-40 lg:-bottom-48 2xl:-bottom-40 rotate-[35deg]
                [--r3-right-init:-4rem] [--r3-right-view:3rem]
                lg:[--r3-right-init:-12rem] lg:[--r3-right-view:5.5rem]
                2xl:[--r3-right-init:-12rem] 2xl:[--r3-right-view:7.5rem]"
                ></motion.div>
                {/* End Right Yellow */}
                {/* End Right Cards */}
                {/* End Card Container */}
            </div>
            {/* End Hero Container */}
        </section>
    );
}
