import { motion } from "framer-motion"

interface BlogCardProps {
    title: string
    description?: string
    imgSrc: string
}

export const BlogCard = ({ title, imgSrc }: BlogCardProps) => {
    return (
        <motion.div
            className="flex h-full flex-col gap-y-2.5"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="relative w-full aspect-video overflow-hidden">
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    )
}