import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  description?: string
  imgSrc: string
  type: "image" | "video"
}

export const BlogCard = ({ title, imgSrc, type }: BlogCardProps) => {
  return (
    <motion.div
      className="flex h-full flex-col gap-y-2.5"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        {type === "image" ? (
          <motion.img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.video
            src={imgSrc}
            className="absolute inset-0 h-full w-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
    </motion.div>
  )
}