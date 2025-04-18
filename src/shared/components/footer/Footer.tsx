"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Film Festival" },
    { label: "FAQ" },
    { label: "Work With Us" },
    { label: "More" },
]

export const Footer = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    if (!show) return null
    const columnCount = 3
    const navLinksColumns = Array.from({ length: columnCount }, (_, i) =>
        navLinks.filter((_, index) => index % columnCount === i),
    )

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const columnVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for a more natural feel
            },
        },
    }

    const footerBgVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: [0, 0.3, 1],
            y: 0,
            transition: {
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: "easeOut",
            },
        },
    }

    return (
        <footer className="w-full">
            <motion.div
                className="w-full bg-[url(/footer_img.png)] bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
            />

            <div className="bg-[#304FA8] w-full min-h-[350px] md:min-h-[450px] relative px-4 md:px-8 py-8 md:py-12 overflow-hidden">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white max-w-4xl mx-auto relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {navLinksColumns.map((column, colIndex) => (
                        <motion.div key={colIndex} className="flex flex-col items-center md:items-start" variants={columnVariants}>
                            {column.map((item, index) => (
                                <motion.p
                                    key={index}
                                    className="mb-3 hover:text-yellow-200 transition-colors duration-300 cursor-pointer"
                                    variants={itemVariants}
                                    whileHover={{
                                        x: 5,
                                        textShadow: "0 0 8px rgba(255,255,255,0.5)",
                                        transition: { type: "spring", stiffness: 400, damping: 10 },
                                    }}
                                >
                                    {item.label}
                                </motion.p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.img
                    src="/footer_bg.png"
                    alt=""
                    className="absolute h-64 md:h-96 bottom-0 left-1/2 transform -translate-x-1/2 md:opacity-100"
                    variants={footerBgVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </div>
        </footer>
    )
}
