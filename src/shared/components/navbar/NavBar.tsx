import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "@tanstack/react-router"

const navLinks: { name: string; path: string }[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Film lineup",
        path: "/film-lineup",
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

    // Improved animation variants
    const navbarVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    }

    const linkVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
    }

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

    // Mobile menu variants
    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98], // Custom easing for smooth animation
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98],
            },
        },
    }

    const mobileNavItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.25,
            },
        }),
        exit: { opacity: 0, x: -10 },
    }

    return (
        <motion.header
            className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F9FFF1]/90 backdrop-blur-sm shadow-md" : ""
                }`}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className="flex justify-between items-center min-h-16 px-4 md:px-10 py-2">
                <motion.div variants={logoVariants}>
                    <div>
                        <img src="/logo.svg" alt="Dhruma Film Festival" className="h-12 md:h-auto" />
                    </div>
                </motion.div>

                {/* Mobile menu button */}
                <motion.div className="md:hidden" variants={linkVariants}>
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
                                transition={{ duration: 0.3 }}
                            />
                        </svg>
                    </button>
                </motion.div>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-x-12">
                    <div className="flex items-center gap-x-12">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                className="uppercase hover:text-[#224095] transition-colors duration-300"
                                variants={linkVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                            >
                                <Link to={link.path}>
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className="flex items-center gap-x-4 md:gap-x-8" variants={linkVariants}>
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

            {/* Mobile menu with improved animations */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-[#F9FFF1] absolute top-full left-0 right-0 shadow-lg overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex flex-col py-4 px-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    className="py-3 uppercase border-b border-gray-200 last:border-0"
                                    custom={index}
                                    variants={mobileNavItemVariants}
                                    onClick={() => setIsOpen(false)}
                                >

                                    <Link to={link.path}>
                                        {link.name}
                                    </Link>

                                </motion.div>
                            ))}
                            <motion.div
                                className="flex flex-col gap-4 mt-4"
                                variants={mobileNavItemVariants}
                                custom={navLinks.length}
                            >
                                <motion.button
                                    className="bg-[#224095] text-white py-2 px-4 rounded-md"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Become a Sponsor
                                </motion.button>
                                <motion.button
                                    className="bg-[#FF8B17] text-white py-2 px-4 rounded-md"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Book Now
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
