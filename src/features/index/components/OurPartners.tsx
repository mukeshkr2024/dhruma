import { useRef } from 'react'

import { motion, useInView } from 'framer-motion'

const partners = [
    {
        images: ["/Rail_black.png", "Indian_Railway_Heritage_Logo-14_–_Darjeeling_Himalayan_Railway_(NFR).png"],
        label: "Official Partner",
    },
    // {
    //     images: ["/admin.png"],
    //     label: "Operations Partner",
    // },
    {
        images: ["/TAHBIB.png"],
        label: "International Cultural Partner",
    },
    {
        images: ["/LE VILLAGE GUY.png"],
        label: "Production Partner",
    },
    {
        images: ["/grandfather.png"],
        label: "Creative Partner",
    },
    {
        images: ["/cloudprism.png"],
        label: "Technology Partner",
    },
    {
        images: ["/VISION.png"],
        label: "Regional Strategic Partner",
    },
    {
        images: ["/volunteer.png"],
        label: "Volunteer Partner",
    },
    {
        images: ["/ai.jpeg"],
        label: "Ai-Films Awards",
    },
    {
        images: ["/tourism_partner.png"],
        label: "Tourism Partner",
    }, {
        images: ["/darjeeling.png"],
        label: ""
    },
];


const OurPartners = () => {
    const partnersRef = useRef(null)
    const partnersInView = useInView(partnersRef, { once: true, amount: 0.3 })

    return (
        <motion.section
            className="flex section_primary flex-col gap-y-8 md:gap-y-16 py-12 md:py-20 px-4 md:px-0"
            ref={partnersRef}
            initial={{ opacity: 0, y: 50 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="primary-heading text-center md:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={partnersInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Our <br /> Partners
            </motion.h2>

            <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14"
                initial={{ opacity: 0 }}
                animate={partnersInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="flex w-full gap-y-6 md:gap-y-10 items-center justify-start flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                        <motion.div
                            className="bg-white border-t-[5px] border-[#FF8B17] aspect-video rounded-2xl w-full p-4"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <div className="flex items-center justify-center h-full gap-4">
                                {partner.images.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-center h-full"
                                        style={{
                                            flex: partner.images.length > 1 ? `0 1 ${100 / partner.images.length}%` : "1",
                                            maxWidth: partner.images.length > 1 ? `${100 / partner.images.length}%` : "80%",
                                        }}
                                    >
                                        <img
                                            src={`/partners/${image}`}
                                            alt={partner.label}
                                            className="max-w-full max-h-[140px] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <span className="text-[#DF941C] text-xl md:text-2xl font-primary uppercase text-center">
                            {partner.label}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default OurPartners