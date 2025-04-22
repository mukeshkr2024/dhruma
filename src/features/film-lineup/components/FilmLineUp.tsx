import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import FeaturedFilms from "@/features/index/components/FeaturedFilms"
import { BecomeSponsor } from "@/shared/components/BecomeSponsor"
import { BlogList } from "@/shared/components/blogs/BlogList"
import { JoinUs } from "@/shared/components/JoinUs"
import { Search } from "lucide-react"

const filmCategories = [
    "Documentary",
    "Debut Director",
    "Horror",
    "Adventure",
    "Feature Fiction",
    "Short Film",
    "Animation",
    "Experimental",
    "Student Film",
    "Science Fiction",
    "Fantasy",
    "Thriller",
    "Drama",
    "Comedy",
    "Musical",
    "Biopic",
    "Historical",
    "Mystery",
    "Action",
]

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
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
}

export const FilmLineUp = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [activeCategory, setActiveCategory] = useState("Documentary")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <motion.section
                className="py-12 md:py-20 relative max-w-6xl mx-auto min-h-[400px] md:min-h-[630px] space-y-4 px-4 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src="/icons/train-icon.svg" alt="Train icon" className="w-6 h-6 md:w-auto md:h-auto" />
                    <p className="text-sm md:text-base">From the misty hills of Darjeeling to stories untold</p>
                </motion.div>

                <motion.h2
                    className="primary-heading text-3xl md:text-5xl lg:text-6xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    explore the official <br className="hidden md:block" /> selection of films at{" "}
                    <br className="hidden md:block" />
                    the Dhruma Film <br className="hidden md:block" />
                    Festival.
                </motion.h2>

                <motion.div
                    className="absolute right-0 bottom-4 w-1/2 md:w-auto"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                >
                    <img src="/train_img.png" alt="Train illustration" className="w-full h-auto" />
                </motion.div>
            </motion.section>

            <FeaturedFilms />

            {/* Search and Categories Section */}
            <section className="px-4 md:px-8 py-8 md:py-16 max-w-7xl mx-auto">
                <motion.div
                    className="relative mb-8 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        type="search"
                        placeholder="Search for films..."
                        className="w-full py-3 px-5 pr-12 rounded-full border border-[#B9B9B9] focus:outline-none focus:ring-2 focus:ring-[#FF8B17] transition-all"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </motion.div>

                <motion.div
                    className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-2.5 py-4 md:py-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {filmCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`border rounded-full px-3 py-1.5 md:px-6 md:py-2 font-secondary text-xs md:text-sm cursor-pointer transition-all ${activeCategory === category
                                ? "border-[#FF8B17]"
                                : "border-[#B9B9B9] hover:border-[#FF8B17]"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <BlogList />
                </motion.div>
            </section>

            <JoinUs />

            <BecomeSponsor />
        </div>
    )
}
