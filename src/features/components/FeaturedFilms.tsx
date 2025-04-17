"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const films: {
    name: string
    imageSrc: string
}[] = [
        {
            name: "Film 1",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 2",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 3",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 4",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 5",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 6",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 7",
            imageSrc: "/films/film1.png",
        },
        {
            name: "Film 8",
            imageSrc: "/films/film1.png",
        },
    ]

const FeaturedFilms = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [duplicates, setDuplicates] = useState(2)
    const [isHovered, setIsHovered] = useState<number | null>(null)

    useEffect(() => {
        const calculateDuplicates = () => {
            if (!containerRef.current) return

            const containerWidth = containerRef.current.offsetWidth
            const filmWidth = 56 + 16 // Film width + margin (56px + 16px gap)
            const visibleFilms = Math.ceil(containerWidth / filmWidth)

            // We need at least 2 sets to create the infinite effect
            setDuplicates(Math.max(2, Math.ceil(visibleFilms / films.length) + 1))
        }

        calculateDuplicates()
        window.addEventListener("resize", calculateDuplicates)

        return () => {
            window.removeEventListener("resize", calculateDuplicates)
        }
    }, [])

    // Create duplicated film sets for the infinite scroll
    const allFilms = Array(duplicates)
        .fill(0)
        .flatMap(() => films)

    return (
        <motion.div
            className="w-full overflow-hidden py-16"
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2
                className="primary-heading text-center mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Featured Films
            </motion.h2>

            <div
                className="animate-carousel flex  px-4"
                style={{
                    animationDuration: `${15}s`,
                    animationPlayState: isHovered !== null ? "paused" : "running",
                }}
            >
                {allFilms.map((film, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0"
                        onHoverStart={() => setIsHovered(index)}
                        onHoverEnd={() => setIsHovered(null)}
                        whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                    >
                        <div className="bg-[url('/film_cover.svg')] bg-center bg-cover h-56 md:h-72 w-44 md:w-56">
                            <div className="w-full h-full py-7 md:py-9 px-4 md:px-5 relative overflow-hidden">
                                <motion.img
                                    src={film.imageSrc || "/placeholder.svg"}
                                    alt={film.name}
                                    className="h-full w-full rounded-md object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {isHovered === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <button className="px-3 py-1.5 bg-[#FF8B17] text-white rounded-full text-sm">Watch Trailer</button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                        <motion.h3
                            className="text-center text-[#FF8B17] font-primary mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {film.name}
                        </motion.h3>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default FeaturedFilms
