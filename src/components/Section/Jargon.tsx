"use client";

import { motion } from "framer-motion";

export default function Jargon() {
    return (
        <>
            <section
                id="jargon"
                className="w-full relative overflow-hidden shrink-0 flex flex-col gap-2 lg:gap-4 bg-white rounded-xl p-4 lg:p-4 shadow-sm z-0"
            >
                {/* Left Card */}
                <div className="absolute -left-14 lg:-left-10 2xl:-left-6 -bottom-14 -rotate-[35deg] w-20 h-40 bg-Yellow shadow"></div>
                <div className="absolute -left-14 lg:-left-10 2xl:-left-6 -top-14 rotate-[35deg] w-20 h-40 bg-Blue shadow z-10"></div>
                {/* End Left Card */}
                {/* Jargon */}
                <div className="w-full flex flex-col font-bold lg:font-bold text-xl lg:text-2xl text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.2,
                            },
                        }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                        className="block text-Blue"
                    >
                        BERANI MELANGKAH ,
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.4,
                            },
                        }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                        className="block text-Yellow"
                    >
                        MENGUKIR SEJARAH!!!
                    </motion.span>
                </div>
                {/* End Jargon */}
                {/* Right Card */}
                <div className="absolute -right-14 lg:-right-10 2xl:-right-6 -bottom-14 rotate-[35deg] w-20 h-40 bg-Yellow shadow z-10"></div>
                <div className="absolute -right-14 lg:-right-10 2xl:-right-6 -top-14 -rotate-[35deg] w-20 h-40 bg-Blue shadow"></div>
                {/* End Right Card */}
            </section>
        </>
    );
}
