import { motion } from "framer-motion"

interface BlogCardProps {
    title: string
    description: string
    imgSrc: string
}

export const BlogCard = ({ title, description, imgSrc }: BlogCardProps) => {
    return (
        <motion.div
            className="flex flex-col gap-y-2.5 h-full"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="overflow-hidden rounded-2xl">
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="rounded-2xl w-full h-[350px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <h3 className="font-primary text-base md:text-lg uppercase line-clamp-2 mt-2">{title}</h3>
            <p className="line-clamp-3 text-sm md:text-base text-gray-700">{description}</p>
        </motion.div>
    )
}
