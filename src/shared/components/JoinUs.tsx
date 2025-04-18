import { motion } from 'framer-motion'

export const JoinUs = () => {
    return (
        <motion.section
            className="flex max-w-5xl mx-auto flex-col gap-y-8 md:gap-y-16 py-12 md:py-20 items-center justify-center px-4 md:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                className="primary-heading"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Join us
            </motion.h2>
            <motion.div
                className="flex flex-col md:flex-row gap-6 md:gap-14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <motion.img
                    src="/pass_1.png"
                    alt="Pass 1"
                    whileHover={{ y: -10, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <motion.img
                    src="/pass_2.png"
                    alt="Pass 2"
                    whileHover={{ y: -10, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </motion.div>
        </motion.section>)
}
