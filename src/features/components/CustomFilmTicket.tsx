import { motion } from "framer-motion"

export const CustomFilmTicket = () => {
    return (
        <motion.section className="mx-4 sm:mx-8 md:mx-12 relative my-6 sm:my-16 bg-[url('/mountain.png')] bg-center bg-cover h-[280px] sm:h-[320px] md:h-[340px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-br-full border-b border-r"></div>
            <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-bl-full border-b border-l"></div>
            <div className="absolute bottom-0 left-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tr-full border-t border-r"></div>
            <div className="absolute bottom-0 right-0 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tl-full border-t border-l"></div>

            {/* Top and bottom ticket perforations */}
            <div className="absolute top-0 right-1/4 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-b-full border-b border-l border-r"></div>
            <div className="absolute bottom-0 right-1/4 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-t-full border-t border-l border-r"></div>

            {/* Dotted line divider */}
            <div className="absolute top-6 bottom-6 right-[28.4%] sm:right-[28.4%] md:right-[28.4%] -translate-x-1/2 w-px border-l-2 border-dotted border-black z-0"></div>

            <div className="w-full h-full border-1 pt-8 sm:pt-12 md:pt-16 flex flex-col justify-between items-start">
                {/* Header section */}
                <div className="px-4 sm:px-8 md:px-12 w-full flex justify-between items-center">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.h2
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="primary-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Dhruma Film <br /> Festival
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="pt-4 sm:pt-8 md:pt-12 mr-4 sm:mr-6 md:mr-10">
                        <motion.h2 whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }} className="primary-heading text-xl sm:text-2xl md:text-3xl">REGISTER</motion.h2>
                    </motion.div>
                </div>

                {/* Footer section */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                    {/* Left side with location, duration, dates */}
                    <div className="w-full sm:w-[71.5%]">
                        <div className="flex flex-col sm:flex-row justify-between w-full min-h-[60px] sm:min-h-[83px]">
                            <div className="border-t flex-1 flex items-center border-r justify-center gap-1.5 py-2 sm:py-0">
                                <img src="/icons/map.svg" alt="" className="h-4 sm:h-5" />
                                <span className="uppercase text-sm sm:text-lg md:text-xl font-secondary text-[#224095] font-semibold">
                                    Darjeeling
                                </span>
                            </div>
                            <div
                                className="flex-1 relative max-w-full sm:max-w-40 border-t border-r flex items-center justify-center py-2 sm:py-0">
                                <span className="uppercase text-sm sm:text-lg md:text-xl font-secondary text-[#224095] font-semibold">
                                    3 Day
                                </span>
                                <img
                                    src="/stamp_img.svg"
                                    alt=""
                                    className="hidden sm:block size-20 md:size-24 lg:size-32 absolute bottom-2 sm:bottom-4 -right-[30px] sm:-right-[45px] md:-right-[62px]"
                                />
                            </div>
                            <div

                                className="flex-1 flex items-center border-t justify-center py-2 sm:py-0">
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
                            </div>
                        </div>
                    </div>

                    <Counter />
                </div>
            </div>
        </motion.section>
    )
}


function Counter() {
    return (
        <div className="flex-1 flex items-center justify-center mt-4 sm:mt-0">
            <div className="flex space-x-1 sm:space-x-2">
                <motion.div initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }} className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">27</span>
                    <span className="text-gray-500 text-xs sm:text-sm">DAY</span>
                </motion.div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">11</span>
                    <span className="text-gray-500 text-xs sm:text-sm">HOUR</span>
                </motion.div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">02</span>
                    <span className="text-gray-500 text-xs sm:text-sm">MIN</span>
                </motion.div>
                <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">:</span>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="flex flex-col items-center gap-0.5 sm:gap-1 pb-3 sm:pb-6">
                    <span className="text-[#ff3b31] text-xl sm:text-2xl md:text-3xl font-bold">27</span>
                    <span className="text-gray-500 text-xs sm:text-sm">SEC</span>
                </motion.div>
            </div>
        </div>
    )
}