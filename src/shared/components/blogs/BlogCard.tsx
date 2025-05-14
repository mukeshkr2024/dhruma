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
            <div className="overflow-hidden rounded-2xl">
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="h-[200px] aspect-video w-full rounded-2xl object-cover
                             sm:h-[250px]
                             md:h-[300px]
                             lg:h-[350px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            {/* <h3 className="font-primary line-clamp-2 mt-2 text-sm uppercase
                          sm:text-base
                          md:text-lg
                          lg:text-xl">
                {title}
            </h3>
            <p className="line-clamp-3 text-xs text-gray-700
                         sm:text-sm
                         md:text-base">
                {description}
            </p> */}
        </motion.div>
    )
}