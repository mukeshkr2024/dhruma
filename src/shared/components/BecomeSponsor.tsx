import { motion } from 'framer-motion'

export const BecomeSponsor = () => {
    return (
        <motion.section
            className="section_primary px-4 md:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="flex flex-col gap-y-8 md:gap-y-14">
                <motion.h3
                    className="primary-heading"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Become a <br /> Sponsor
                </motion.h3>
                <div className="max-w-3xl flex flex-col gap-y-4 md:gap-y-6">
                    <motion.p
                        className="font-primary font-normal text-base md:text-lg uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Together, let's turn stories into impact <br /> and screens into stages for change.
                    </motion.p>
                    <motion.p
                        className="paragraph_primary text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        The world craves meaningful content. Film, the universal language, sparks connection and change. At
                        DHRUMA, we celebrate better cinema, stories, and content. <br />
                        We invite bold, purpose-driven brands to shape the future of storytelling with us. Partner with DHRUMA to
                        amplify unheard voices, champion diverse perspectives, and join a global movement transforming how the
                        world sees, feels, and connects.
                    </motion.p>
                </div>

                <motion.img
                    src="/join_btn.svg"
                    alt="Join"
                    className="w-48 md:w-64 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.8 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.section>
    )
}
