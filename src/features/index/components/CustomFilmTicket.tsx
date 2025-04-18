"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const CustomFilmTicket = () => {
    const controls = useAnimation()
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    // Simplified variants with fewer properties and lighter animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4 },
        },
    }

    return (
        <motion.section
            ref={containerRef}
            className="mx-4 sm:mx-8 md:mx-12 relative my-6 sm:my-16 bg-[url('/mountain.png')] bg-center bg-cover h-[280px] sm:h-[320px] md:h-[340px]"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Static corner decorations - no animations */}
            <div className="absolute top-0 left-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-br-full border-b border-r"></div>
            <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-bl-full border-b border-l"></div>
            <div className="absolute bottom-0 left-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tr-full border-t border-r"></div>
            <div className="absolute bottom-0 right-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tl-full border-t border-l"></div>

            {/* Top and bottom ticket perforations - static */}
            <div className="absolute top-0 right-1/4 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-b-full border-b border-l border-r"></div>
            <div className="absolute bottom-0 right-1/4 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-t-full border-t border-l border-r"></div>

            {/* Static dotted line divider */}
            <div className="absolute top-6 bottom-6 right-[28.4%] sm:right-[28.4%] md:right-[28.4%] -translate-x-1/2 w-px border-l-2 border-dotted border-black z-0"></div>

            <div className="w-full h-full border-1 pt-8 sm:pt-12 md:pt-16 flex flex-col justify-between items-start">
                {/* Header section with minimal animations */}
                <div className="px-4 sm:px-8 md:px-12 w-full flex justify-between items-center">
                    <motion.div variants={itemVariants} className="transition-transform hover:scale-105 duration-300">
                        <h2 className="primary-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#224095] font-bold">
                            Dhruma Film <br /> Festival
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="pt-4 sm:pt-8 md:pt-12 mr-4 sm:mr-6 md:mr-10 transition-transform hover:scale-105 duration-300"
                    >
                        <h2 className="primary-heading text-xl sm:text-2xl md:text-3xl">REGISTER</h2>
                    </motion.div>
                </div>

                {/* Footer section */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                    {/* Left side with location, duration, dates */}
                    <div className="w-full sm:w-[71.5%]">
                        <div className="flex flex-col sm:flex-row justify-between w-full min-h-[60px] sm:min-h-[83px]">
                            <motion.div
                                variants={itemVariants}
                                className="border-t flex-1 flex items-center border-r justify-center gap-1.5 py-2 sm:py-0 transition-colors hover:bg-white/10 duration-300"
                            >
                                <img src="/icons/map.svg" alt="" className="h-4 sm:h-5" />
                                <span className="uppercase text-sm sm:text-lg md:text-xl font-secondary text-[#224095] font-semibold">
                                    Darjeeling
                                </span>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex-1 relative max-w-full sm:max-w-40 border-t border-r flex items-center justify-center py-2 sm:py-0 transition-colors hover:bg-white/10 duration-300"
                            >
                                <span className="uppercase text-sm sm:text-lg md:text-xl font-secondary text-[#224095] font-semibold">
                                    3 Day
                                </span>
                                <img
                                    src="/stamp_img.svg"
                                    alt=""
                                    className="hidden sm:block size-20 md:size-24 lg:size-32 absolute bottom-2 sm:bottom-4 -right-[30px] sm:-right-[45px] md:-right-[62px]"
                                />
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex-1 flex items-center border-t justify-center py-2 sm:py-0 transition-colors hover:bg-white/10 duration-300"
                            >
                                <span className="uppercase text-sm sm:text-lg md:text-xl font-secondary text-[#224095] font-semibold">
                                    <span>
                                        15<span className="align-super text-[0.6em]">th</span>
                                    </span>{" "}
                                    -
                                    <span>
                                        18<span className="align-super text-[0.6em]">th</span>
                                    </span>{" "}
                                    June
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    <OptimizedCounter />
                </div>
            </div>
        </motion.section>
    )
}

function OptimizedCounter() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 30)

        const calculateTimeLeft = () => {
            const now = new Date()
            const distance = targetDate.getTime() - now.getTime()

            if (distance < 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 }
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            return { days, hours, minutes, seconds }
        }

        setTimeLeft(calculateTimeLeft())

        // Reduce update frequency to once per second
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    // Simple fade-in animation for the counter
    const counterVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
        },
    }

    return (
        <motion.div className="flex-1 flex items-center justify-center mt-4 sm:mt-0" variants={counterVariants}>
            <div className="flex space-x-1 sm:space-x-2">
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">
                        {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">DAY</span>
                </div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">
                        {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">HOUR</span>
                </div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">
                        {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">MIN</span>
                </div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <div className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">
                        {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">SEC</span>
                </div>
            </div>
        </motion.div>
    )
}
