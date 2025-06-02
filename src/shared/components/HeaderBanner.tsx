import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
// import { Link } from "@tanstack/react-router"


export const HeaderBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [duplicates, setDuplicates] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const calculateDuplicates = () => {
      if (!containerRef.current || !innerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = innerRef.current.offsetWidth

      const duplicatesNeeded = Math.ceil((containerWidth * 2) / contentWidth)
      setDuplicates(Math.max(duplicatesNeeded, 2))
    }

    calculateDuplicates()
    window.addEventListener("resize", calculateDuplicates)

    return () => {
      window.removeEventListener("resize", calculateDuplicates)
    }
  }, [])

  return (
    <motion.div
      className="bg-[#FF922C] py-1 overflow-hidden"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="animate-marquee inline-flex whitespace-nowrap"
        style={{
          animationDuration: `${duplicates * 15}s`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {Array(duplicates)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="inline-flex items-center mx-4 md:mx-10"
              ref={index === 0 ? innerRef : undefined}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="font-secondary font-medium hover:underline"
                whileTap={{ scale: 0.95 }}
              >
                {/* <Link to="/submit-film"> */}
                Result coming soon
                {/* </Link> */}
              </motion.div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  )
}
