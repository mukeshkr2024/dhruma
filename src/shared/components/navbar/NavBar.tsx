"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks: { name: string; path: string }[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Film lineup",
        path: "#",
    },
    {
        name: "Schedule",
        path: "#",
    },
]

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F9FFF1]/90 backdrop-blur-sm shadow-md" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex justify-between items-center min-h-16 px-4 md:px-10 py-2">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div>
                        <img src="/logo.svg" alt="Dhruma Film Festival" className="h-12 md:h-auto" />
                    </div>
                </motion.div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center p-2"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                stroke="#224095"
                                strokeWidth="2"
                                strokeLinecap="round"
                                animate={isOpen ? { d: "M18 6L6 18M6 6l12 12" } : { d: "M4 6h16M4 12h16M4 18h16" }}
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-x-12">
                    <motion.div
                        className="flex items-center gap-x-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.path}
                                className="uppercase hover:text-[#224095] transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                    duration: 0.3,
                                    delay: 0.3 + index * 0.1,
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-x-4 md:gap-x-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <motion.img
                            src="./become_sponser_btn.svg"
                            alt="Become a sponsor"
                            className="h-8 md:h-auto cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.img
                            src="./book_now_btn.svg"
                            alt="Book now"
                            className="h-8 md:h-auto cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                    </motion.div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-[#F9FFF1] absolute top-full left-0 right-0 shadow-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col py-4 px-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.path}
                                    className="py-3 uppercase border-b border-gray-200 last:border-0"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <button className="bg-[#224095] text-white py-2 px-4 rounded-md">Become a Sponsor</button>
                                <button className="bg-[#FF8B17] text-white py-2 px-4 rounded-md">Book Now</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
