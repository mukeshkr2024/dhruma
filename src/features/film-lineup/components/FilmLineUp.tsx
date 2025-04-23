import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import FeaturedFilms from "@/features/index/components/FeaturedFilms"
import { BecomeSponsor } from "@/shared/components/BecomeSponsor"
import { BlogList } from "@/shared/components/blogs/BlogList"
// import { JoinUs } from "@/shared/components/JoinUs"
import { Search } from "lucide-react"

const filmCategories = [
    "Feature Films",
    "Short Films",
    "Documentaries",
    "AI Films",
    "Animated & Experimental Films",
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
                className="relative mx-auto min-h-[300px] px-4 py-8 
                                  sm:min-h-[350px] sm:px-6 sm:py-12 
                                  md:min-h-[500px] md:px-8 md:py-16 
                                  lg:max-w-6xl lg:min-h-[630px] lg:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="flex items-center gap-2 sm:gap-3 md:gap-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img
                        src="/icons/train-icon.svg"
                        alt="Train icon"
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                    />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        From the misty hills of Darjeeling to stories untold
                    </p>
                </motion.div>

                <motion.h2
                    className="primary-heading mt-4 text-2xl leading-tight 
                                     sm:text-3xl sm:leading-snug 
                                     md:text-4xl 
                                     lg:text-5xl 
                                     xl:text-6xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    explore the official <br className="hidden sm:inline" />
                    selection of films at{" "}
                    <br className="hidden md:inline lg:hidden" />
                    the Dhruma Film <br className="hidden xl:inline" />
                    Festival.
                </motion.h2>

                <motion.div
                    className="absolute bottom-0 right-0 w-[45%] 
                                      sm:w-[40%] md:bottom-4 md:w-[35%] 
                                      lg:w-[30%] xl:w-auto"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                >
                    <img
                        src="/train_img.png"
                        alt="Train illustration"
                        className="h-auto w-full"
                    />
                </motion.div>
            </motion.section>

            <FeaturedFilms />

            {/* Search and Categories Section */}
            <section className="mx-auto px-4 py-8 
                                     sm:px-6 sm:py-12 
                                     md:px-8 md:py-16 
                                     lg:max-w-7xl">
                <motion.div
                    className="relative mx-auto mb-6 max-w-lg 
                                     sm:mb-8 sm:max-w-xl 
                                     md:max-w-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        type="search"
                        placeholder="Search for films..."
                        className="w-full rounded-full border border-[#B9B9B9] px-4 py-2 pr-12 
                                        sm:px-5 sm:py-3 
                                        focus:outline-none focus:ring-2 focus:ring-[#FF8B17]"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 transform 
                                            text-gray-500 sm:right-5"
                        size={20} />
                </motion.div>

                <motion.div
                    className="flex w-full flex-wrap justify-center gap-2 py-4 
                                    sm:gap-2.5 sm:py-6 
                                    md:gap-3 md:py-8 
                                    lg:gap-4"
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
                            className={`cursor-pointer rounded-full border 
                                             px-2.5 py-1 text-xs 
                                             sm:px-3 sm:py-1.5 sm:text-sm 
                                             md:px-4 md:py-2 md:text-base 
                                             ${activeCategory === category
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

            <BecomeSponsor />
        </div>
    )
}
