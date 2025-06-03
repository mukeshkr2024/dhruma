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
      className="mx-4 xs:mx-6 sm:mx-8 md:mx-12 relative my-6 sm:my-16 bg-[url('/mountain.png')] bg-center bg-cover h-[280px] sm:h-[320px] md:h-[340px] lg:h-[380px]"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-br-full border-b border-r" />
      <div className="absolute top-0 right-0 w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-bl-full border-b border-l" />
      <div className="absolute bottom-0 left-0 w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tr-full border-t border-r" />
      <div className="absolute bottom-0 right-0 w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 bg-[#F9FFF1] rounded-tl-full border-t border-l" />

      {/* Ticket perforations - only show on larger screens */}
      <div className="hidden sm:block absolute top-0 right-1/4 -translate-x-1/2 w-8 xs:w-9 sm:w-10 md:w-12 h-4 xs:h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-b-full border-b border-l border-r" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 -translate-x-1/2 w-8 xs:w-9 sm:w-10 md:w-12 h-4 xs:h-4 sm:h-5 md:h-6 bg-[#F9FFF1] rounded-t-full border-t border-l border-r" />

      {/* Dotted line divider - only show on larger screens */}
      <div className="hidden sm:block absolute top-6 bottom-6 right-[28.4%] -translate-x-1/2 w-px border-l-2 border-dotted border-black z-0" />

      <div className="w-full h-full border-1 pt-8 xs:pt-10 sm:pt-12 md:pt-16 flex flex-col justify-between items-start">
        {/* Header section */}
        <div className="px-4 xs:px-6 sm:px-8 md:px-12 w-full flex justify-between items-start sm:items-center">
          <motion.div variants={itemVariants} className="transition-transform hover:scale-105 duration-300">
            <h2 className="primary-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#224095] font-bold">
              Dhruma Film <br className="hidden xs:block" /> Festival
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="pt-1 xs:pt-5 sm:pt-8 md:pt-12 mr-2 xs:mr-4 sm:mr-6 md:mr-10 transition-transform hover:scale-105 duration-300"
          >
            <h2 className="primary-heading hidden md:flex text-lg xs:text-xl  text-center">
              Date Announcing <br /> Soon
            </h2>
          </motion.div>
        </div>

        {/* Content section - stacked on mobile, side by side on desktop */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 xs:px-6 sm:px-0">
          {/* Left side content - location and dates */}
          <div className="w-full sm:w-[65%] lg:w-[70%]">
            <div className="flex flex-col sm:flex-row justify-between w-full min-h-[60px] sm:min-h-[83px]">
              <motion.div
                variants={itemVariants}
                className="border-t flex-1 flex items-center sm:border-r justify-center gap-1 xs:gap-1.5 py-2 xs:py-3 sm:py-0 transition-colors hover:bg-white/10 duration-300"
              >
                <img src="/icons/map.svg" alt="" className="h-3 xs:h-4 sm:h-5" />
                <span className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-secondary text-[#224095] font-semibold">
                  Darjeeling
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex-1 relative max-w-full sm:max-w-40 border-t sm:border-r flex items-center justify-center py-2 xs:py-3 sm:py-0 transition-colors hover:bg-white/10 duration-300"
              >
                <span className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-secondary text-[#224095] font-semibold">
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
                className="flex-1 flex items-center border-t justify-center py-2 xs:py-3 sm:py-0 transition-colors hover:bg-white/10 duration-300"
              >
                {/* <span className="uppercase text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-secondary text-[#224095] font-semibold whitespace-nowrap">
                  June dates announcing soon
                </span> */}
              </motion.div>
            </div>
          </div>
          <h2 className="primary-heading flex md:hidden text-lg xs:text-xl text-center">
            Date Announcing <br /> Soon
          </h2>
          {/* Right side - counter */}
          <div className="w-full sm:w-[35%] lg:w-[30%]">
            <Counter />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 28th may ,2025 (months are 0-indexed in JS)
    const targetDate = new Date(2025, 5, 13); // 13th June 2025

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

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  }

  return (
    <motion.div
      className="flex items-center justify-center py-4 sm:py-0 sm:mt-0 w-full"
      variants={counterVariants}
    >
      <div className="flex flex-col sm:flex-row items-center w-full">
        {/* Labels row - only shown on mobile */}
        <div className="flex sm:hidden w-full justify-between px-4 mb-1">
          <span className="text-gray-500 text-[10px] xs:text-xs">DAY</span>
          <span className="text-gray-500 text-[10px] xs:text-xs">HOUR</span>
          <span className="text-gray-500 text-[10px] xs:text-xs">MIN</span>
          <span className="text-gray-500 text-[10px] xs:text-xs">SEC</span>
        </div>

        {/* Counter values */}
        <div className="flex w-full justify-between sm:justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 px-4 sm:px-0">
          <div className="flex flex-col items-center">
            <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="hidden sm:block text-gray-500 text-[10px] xs:text-xs sm:text-sm">DAY</span>
          </div>
          <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="hidden sm:block text-gray-500 text-[10px] xs:text-xs sm:text-sm">HOUR</span>
          </div>
          <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="hidden sm:block text-gray-500 text-[10px] xs:text-xs sm:text-sm">MIN</span>
          </div>
          <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[#ff3b31] text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="hidden sm:block text-gray-500 text-[10px] xs:text-xs sm:text-sm">SEC</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}