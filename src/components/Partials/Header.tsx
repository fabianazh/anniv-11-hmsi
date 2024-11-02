"use client";

import { AnimatePresence, motion } from "framer-motion";
import NavModal from "./NavModal";
import { useHeader } from "@/context/SettingsContext";

export default function Header() {
    const { isNavOpen, setIsNavOpen } = useHeader();

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        variants={{
                            initial: {
                                opacity: 0,
                            },
                            enter: {
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                },
                            },
                            exit: {
                                opacity: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.3,
                                },
                            },
                        }}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="fixed w-screen h-screen top-0 left-0 bg-black/50 backdrop-blur-sm z-40"
                    ></motion.div>
                )}
            </AnimatePresence>
            {/* End Overlay */}
            {/* Navbar Modal */}
            <NavModal isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
            {/* Navbar Modal */}
        </>
    );
}
