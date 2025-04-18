
import React, { Suspense, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { CustomFilmTicket } from "./CustomFilmTicket"
import { JoinUs } from "@/shared/components/JoinUs"
import { BecomeSponsor } from "@/shared/components/BecomeSponsor"

const FeaturedFilms = React.lazy(() => import("./FeaturedFilms"))

const socialIcons = [
    {
        id: 1,
        imgSrc: "/linkedin.svg",
    },
    {
        id: 2,
        imgSrc: "/twitter.svg",
    },
    {
        id: 3,
        imgSrc: "/facebook.svg",
    },
    {
        id: 4,
        imgSrc: "/instagram.svg",
    },
]

const sponsors = [
    {
        id: 1,
        imgSrc: "/grandfather.png",
        label: "Partners",
    },
    {
        id: 2,
        imgSrc: "/cloudprism.png",
        label: "Technology\nPartners",
    },
]

const LoadingFallback = () => (
    <div className="flex justify-center items-center py-20">
        <motion.div
            className="w-12 h-12 border-4 border-[#224095] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
    </div>
)

export const Home = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

    // Refs for scroll animations
    const whoAreWeRef = useRef(null)
    const submitFilmRef = useRef(null)
    const missionRef = useRef(null)
    const visionRef = useRef(null)
    const valuesRef = useRef(null)
    const peopleRef = useRef(null)
    const sponsorsRef = useRef(null)
    const membershipRef = useRef(null)

    // Check if sections are in view
    const whoAreWeInView = useInView(whoAreWeRef, { once: true, amount: 0.3 })
    const submitFilmInView = useInView(submitFilmRef, { once: true, amount: 0.3 })
    const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
    const visionInView = useInView(visionRef, { once: true, amount: 0.3 })
    const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
    const peopleInView = useInView(peopleRef, { once: true, amount: 0.3 })
    const sponsorsInView = useInView(sponsorsRef, { once: true, amount: 0.3 })
    const membershipInView = useInView(membershipRef, { once: true, amount: 0.3 })

    return (
        <div className="w-full h-full bg-[url('/texture.svg')] bg-contain bg-no-repeat">
            <CustomFilmTicket />

            {/* Who Are We Section */}
            <motion.section
                className="section_primary flex-col md:flex-row px-4 md:px-0"
                ref={whoAreWeRef}
                initial={{ opacity: 0, y: 50 }}
                animate={whoAreWeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="flex-1 flex justify-center md:justify-start items-center mb-8 md:mb-0">
                    <motion.img
                        src="/logo.svg"
                        className="w-[250px] md:w-[350px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-y-6">
                    <motion.h2
                        className="primary-heading"
                        initial={{ opacity: 0, x: 30 }}
                        animate={whoAreWeInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Who <br />
                        are we
                    </motion.h2>
                    <motion.p
                        className="paragraph_primary"
                        initial={{ opacity: 0 }}
                        animate={whoAreWeInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice
                        matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring
                        you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives
                        come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and
                        mission.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-x-1.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={whoAreWeInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {socialIcons.map((icon, index) => (
                            <motion.img
                                key={icon.id}
                                src={`/icons/${icon.imgSrc}`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 500, damping: 10, duration: 0.3, delay: 0.6 + index * 0.1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={whoAreWeInView ? { opacity: 1, scale: 1 } : {}}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Submit a Film Section */}
            <motion.section
                className="section_primary flex-col-reverse md:flex-row px-4 md:px-0"
                ref={submitFilmRef}
                initial={{ opacity: 0, y: 50 }}
                animate={submitFilmInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="flex-1 flex flex-col gap-y-6">
                    <motion.h2
                        className="primary-heading"
                        initial={{ opacity: 0, x: -30 }}
                        animate={submitFilmInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Submit a <br /> Film
                    </motion.h2>
                    <motion.p
                        className="paragraph_primary"
                        initial={{ opacity: 0 }}
                        animate={submitFilmInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice
                        matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring
                        you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives
                        come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and
                        mission.
                    </motion.p>
                    <motion.img
                        src="/submit_black_btn.svg"
                        alt="Submit"
                        className="w-64 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.6 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={submitFilmInView ? { opacity: 1, y: 0 } : {}}
                    />
                </div>
                <div className="flex-1 flex justify-center md:justify-end items-center mb-8 md:mb-0">
                    <motion.img
                        src="/scene_take.png"
                        className="w-[300px] md:w-[400px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={submitFilmInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 300, damping: 10 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </div>
            </motion.section>

            {/* Black Circle Section */}
            <div className="flex w-full z-0 items-center justify-center -mb-[250px] md:-mb-[450px]" ref={targetRef}>
                <motion.div className="w-full max-w-[1000px] relative px-4 md:px-0" style={{ opacity, scale }}>
                    <motion.img
                        src="/wheel.png"
                        alt="Wheel"
                        className="w-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <div className="absolute w-full top-1/4 md:top-44">
                        <div className="w-full gap-y-4 md:gap-y-8 flex items-center justify-center flex-col">
                            <motion.img
                                src="/white_logo.svg"
                                alt="Dhruma Logo"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                            <motion.p
                                className="paragraph_primary max-w-xl text-white text-center px-4 text-sm md:text-base"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                DHRUMA Film Festival is a bold celebration of diversity, truth, and transformative storytelling. It is a
                                platform where every story, every perspective, and every voice matters — ensuring that even the quietest
                                voices are heard loud and clear. From bustling cities to the most remote corners of the world, DHRUMA
                                curates and showcases films that span ethnicities, genders, cultures, and experiences. It is a sanctuary
                                for stories that challenge, uplift, and inspire. A space where global narratives converge, collide, and
                                come alive — unfiltered, unapologetic, and unforgettable.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Our Mission Section */}
            <motion.section
                className="flex flex-col md:flex-row absolute w-full z-10 max-h-[480px] md:max-h-[380px]"
                ref={missionRef}
                initial={{ opacity: 0 }}
                animate={missionInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full md:w-[45%]">
                    <motion.img
                        src="/mission_img.png"
                        alt="mission image"
                        className="w-full h-full object-cover"
                        initial={{ x: -50, opacity: 0 }}
                        animate={missionInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    />
                </div>
                <motion.div
                    className="w-full md:w-[55%] flex flex-col gap-y-3 p-6 md:p-12 bg-[#304FA8]"
                    initial={{ x: 50, opacity: 0 }}
                    animate={missionInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.h3
                        className="primary-heading text-white"
                        initial={{ y: -20, opacity: 0 }}
                        animate={missionInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Our <br /> Mission
                    </motion.h3>
                    <motion.p
                        className="text-white paragraph_primary text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={missionInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        To amplify underrepresented voices through the universal language of film. <br />
                        To curate content that speaks to the heart, questions the norm, and transcends borders.
                        <br />
                        To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and diverse.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Our Vision Section */}
            <motion.section
                className="flex flex-col md:flex-row w-full max-h-[480px] md:max-h-[380px] mt-[300px] md:mt-[376px]"
                ref={visionRef}
                initial={{ opacity: 0 }}
                animate={visionInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="w-full md:w-[55%] flex flex-col gap-y-3 p-6 md:p-8 bg-[#D3D3D3]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={visionInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-xl mx-auto pt-4 md:pt-6">
                        <motion.h3
                            className="primary-heading"
                            initial={{ y: -20, opacity: 0 }}
                            animate={visionInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Our <br /> Vision
                        </motion.h3>
                        <motion.p
                            className="paragraph_primary text-sm md:text-base"
                            initial={{ opacity: 0 }}
                            animate={visionInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            To amplify underrepresented voices through the universal language of film. <br />
                            To curate content that speaks to the heart, questions the norm, and transcends borders.
                            <br />
                            To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and
                            diverse.
                        </motion.p>
                    </div>
                </motion.div>
                <div className="w-full md:w-[45%]">
                    <motion.img
                        src="/vision_img.png"
                        alt="vision image"
                        className="w-full h-full object-cover"
                        initial={{ x: 50, opacity: 0 }}
                        animate={visionInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                </div>
            </motion.section>

            {/* Our Values Section */}
            <motion.section
                className="pt-10 pb-16 flex bg-[#E6EBDF] items-center justify-center px-4 md:px-0"
                ref={valuesRef}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-6 md:space-y-8 ml-0 md:ml-8">
                    <motion.h3
                        className="primary-heading text-center md:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our <br /> values
                    </motion.h3>
                    <motion.ul
                        className="space-y-1.5"
                        initial={{ opacity: 0 }}
                        animate={valuesInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.li
                            className="flex items-center gap-x-2 paragraph_primary"
                            initial={{ x: -20, opacity: 0 }}
                            animate={valuesInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <img src="/icons/arrow_blue.svg" alt="" />
                            Celebrate diverse and inclusive storytelling.
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-x-2 paragraph_primary"
                            initial={{ x: -20, opacity: 0 }}
                            animate={valuesInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <img src="/icons/arrow_blue.svg" alt="" />
                            Offer a global stage to emerging and underrepresented voices.
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-x-2 paragraph_primary"
                            initial={{ x: -20, opacity: 0 }}
                            animate={valuesInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.7 }}
                        >
                            <img src="/icons/arrow_blue.svg" alt="" />
                            Build cultural bridges through cinema.
                        </motion.li>
                    </motion.ul>
                </div>
            </motion.section>

            {/* People With Us Section */}
            <motion.section
                className="w-full py-16 md:py-32 flex flex-col gap-y-8 md:gap-y-12 px-4 md:px-12"
                ref={peopleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={peopleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <motion.h3
                    className="primary-heading text-center md:text-left md:ml-40"
                    initial={{ opacity: 0, y: -20 }}
                    animate={peopleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    People <br /> with us
                </motion.h3>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={peopleInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center justify-center flex-col gap-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={peopleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div
                                className="mb-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <img src="/director.png" alt="Director" />
                            </motion.div>
                            <span>Lorem ipsum dolor </span>
                            <span className="uppercase text-[#47B157]">director</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Our Sponsors */}
            <motion.section
                className="flex max-w-4xl mx-auto flex-col gap-y-8 md:gap-y-16 py-12 md:py-20 px-4 md:px-0"
                ref={sponsorsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="primary-heading text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={sponsorsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Our <br /> Sponsors
                </motion.h2>
                <motion.div
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14"
                    initial={{ opacity: 0 }}
                    animate={sponsorsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.id}
                            className="flex w-full gap-y-6 md:gap-y-10 items-center justify-center flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                        >
                            <motion.div
                                className="bg-[#FFFFFF] border-t-[5px] border-[#FF8B17] aspect-video rounded-2xl flex items-center justify-center w-full"
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <img src={sponsor.imgSrc || "/placeholder.svg"} alt={sponsor.label} />
                            </motion.div>
                            <span className="text-[#DF941C] text-xl md:text-2xl font-primary uppercase whitespace-pre-line text-center">
                                {sponsor.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
            <Suspense fallback={<LoadingFallback />}>
                <FeaturedFilms label="Featured Films" />
            </Suspense>
            <BecomeSponsor />
            <JoinUs />
            {/* Dhurma Membership Section */}
            <motion.section
                className="section_primary flex-col px-4 md:px-0"
                ref={membershipRef}
                initial={{ opacity: 0, y: 50 }}
                animate={membershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <motion.h3
                    className="primary-heading"
                    initial={{ opacity: 0, x: -30 }}
                    animate={membershipInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Dhruma <br /> membership
                </motion.h3>
                <motion.div
                    className="max-w-3xl space-y-4"
                    initial={{ opacity: 0 }}
                    animate={membershipInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.p
                        className="font-primary font-normal text-base md:text-lg uppercase"
                        initial={{ opacity: 0 }}
                        animate={membershipInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Lorem ipsum dolor sit <br /> amet, co
                    </motion.p>
                    <motion.p
                        className="paragraph_primary text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={membershipInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={membershipInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <motion.img
                        src="/join_btn.svg"
                        alt="Join"
                        className="w-48 md:w-64 cursor-pointer mt-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                </motion.div>
            </motion.section>
        </div>
    )
}
