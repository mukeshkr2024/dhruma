"use client"

import { motion } from "framer-motion"

const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Film Festival" },
    { label: "FAQ" },
    { label: "Work With Us" },
    { label: "More" },
]

export const Footer = () => {
    // Distribute links across 3 columns
    const columnCount = 3
    const navLinksColumns = Array.from({ length: columnCount }, (_, i) =>
        navLinks.filter((_, index) => index % columnCount === i),
    )

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    return (
        <footer className="w-full">
            <motion.div
                className="w-full bg-[url(/footer_img.png)] bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            />

            <div className="bg-[#304FA8] w-full min-h-[350px] md:min-h-[450px] relative px-4 md:px-8 py-8 md:py-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {navLinksColumns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col items-center md:items-start">
                            {column.map((item, index) => (
                                <motion.p
                                    key={index}
                                    className="mb-3 hover:text-yellow-200 transition-colors duration-300 cursor-pointer"
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    {item.label}
                                </motion.p>
                            ))}
                        </div>
                    ))}
                </motion.div>

                <img
                    src="/footer_bg.png"
                    alt=""
                    className="absolute h-64 md:h-96 bottom-0 left-1/2 transform -translate-x-1/2 opacity-30 md:opacity-100"
                />
                {/* 
                <motion.div
                    className="text-white text-center mt-12 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm">© {new Date().getFullYear()} Dhruma Film Festival. All rights reserved.</p>
                </motion.div> */}
            </div>
        </footer>
    )
}
