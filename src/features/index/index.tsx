
const socialIcons = [
    {
        id: 1,
        imgSrc: "/linkedin.svg",
    }, {
        id: 2,
        imgSrc: "/twitter.svg",
    }, {
        id: 3,
        imgSrc: "/facebook.svg",
    }, {
        id: 4,
        imgSrc: "/instagram.svg",
    }
]

const sponsers = [
    {
        id: 1,
        imgSrc: "/grandfather.png",
        label: "Partners"
    }, {
        id: 2,
        imgSrc: "/cloudprism.png",
        label: "Technology\nPartners"
    }
]

export const Home = () => {


    return (
        <div className="w-full h-full bg-[url('/texture.svg')] bg-contain bg-no-repeat">
            {/* <section className="px-10 py-20">
                <div className="bg-[url('/mountain.jpg')] w-full min-h-40 bg-cover relative">
                    <div className="absolute top-0 left-0 w-6 h-6 bg-[#F9FFF1] rounded-br-full"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-[#F9FFF1] rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#F9FFF1] rounded-tr-full"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#F9FFF1] rounded-tl-full"></div>

                    <div className="absolute top-0 right-1/4 -translate-x-1/2 w-8 h-4 bg-[#F9FFF1] rounded-b-full"></div>
                    <div className="absolute bottom-0 right-1/4 -translate-x-1/2 w-8 h-4 bg-[#F9FFF1] rounded-t-full"></div>

                    <div className="absolute top-4 bottom-4 right-1/4 -translate-x-1/2 w-px border-l-2 mr-8 border-dotted border-black"></div>



                    <div className="flex w-ful justify-between pt-20">
                        <div className="w-[72.5%] h-full">
                            <div>
                                <h2 className="text-[#224095] font-bold text-5xl">Dhruma Film <br /> Festival</h2>
                            </div>
                            <div className="w-full border-t-2 h-full flex">

                                <div className="max-w-3xl">

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="flex-1 border-2">
                        <h2> Register</h2>

                        <div className="mt-20">
                            countdown
                        </div>
                    </div>
                </div>
            </section > */}

            {/* Who Are We Section */}
            <section className="section_primary" >
                <div className="flex-1 flex justify-start items-center">
                    <img src="/logo.svg" className="w-[350px]" />
                </div>
                <div className="flex-1 flex flex-col gap-y-6">
                    <h2 className="primary-heading">Who <br />
                        are we</h2>
                    <p className="paragraph_primary">Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and mission.</p>

                    <div className="flex
                     items-center gap-x-1.5">
                        {socialIcons.map(icon => <img src={`/icons/${icon.imgSrc}`} />)}
                    </div>
                </div>
            </section>


            {/*  Section */}
            <section className="section_primary" >
                <div className="flex-1 flex flex-col gap-y-6">
                    <h2 className="primary-heading">Submit a <br /> Film</h2>
                    <p className="paragraph_primary">Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and mission.</p>
                    <img src="/submit_black_btn.svg" alt="" className="w-64" />
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img src="/scene_take.png" className="w-[400px]" />
                </div>
            </section >

            {/* Black Circle Section */}
            <div className="flex w-full z-0 items-center justify-center -mb-[450px]" >
                <div className="w-[1000px] relative">
                    <img src="/wheel.png" alt="" />
                    <div className="absolute w-full top-44">
                        <div className="w-full gap-y-8 flex items-center justify-center flex-col">
                            <img src="/white_logo.svg" alt="" />
                            <p className="paragraph_primary max-w-xl text-white text-center">
                                DHRUMA Film Festival is a bold celebration of diversity, truth, and transformative storytelling. It is a platform where every story, every perspective, and every voice matters — ensuring that even the quietest voices are heard loud and clear. From bustling cities to the most remote corners of the world, DHRUMA curates and showcases films that span ethnicities, genders, cultures, and experiences. It is a sanctuary for stories that challenge, uplift, and inspire. A space where global narratives converge, collide, and come alive — unfiltered, unapologetic, and unforgettable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <section className="flex absolute w-full z-10 max-h-[380px]" >
                <div className="w-[45%]">
                    <img
                        src="/mission_img.png"
                        alt="mission image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[55%] flex flex-col gap-y-3 p-12 bg-[#304FA8]">
                    <h3 className="primary-heading text-white">Our <br /> Mission</h3>
                    <p className="text-white paragraph_primary">To amplify underrepresented voices through the universal language of film. <br />
                        To curate content that speaks to the heart, questions the norm, and transcends borders.
                        <br />
                        To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and diverse.
                    </p>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="flex w-full max-h-[380px] mt-[376px]" >
                <div className="w-[55%] flex flex-col gap-y-3 p-8 bg-[#D3D3D3]">
                    <div className="max-w-xl mx-auto pt-6">
                        <h3 className="primary-heading">Our <br /> Vision</h3>
                        <p className="paragraph_primary">To amplify underrepresented voices through the universal language of film. <br />
                            To curate content that speaks to the heart, questions the norm, and transcends borders.
                            <br />
                            To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and diverse.
                        </p>
                    </div>
                </div>
                <div className="w-[45%]">
                    <img
                        src="/vision_img.png"
                        alt="mission image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            {/* Our Values Section */}
            <section className="pt-10 pb-16 flex bg-[#E6EBDF] items-center justify-center" >
                <div className="space-y-8 ml-8">
                    <h3 className="primary-heading">Our <br /> values</h3>
                    <ul className="space-y-1.5">
                        <li className="flex items-center gap-x-2 paragraph_primary"><img src="/icons/arrow_blue.svg" alt="" />Celebrate diverse and inclusive storytelling.</li>
                        <li className="flex items-center gap-x-2 paragraph_primary"><img src="/icons/arrow_blue.svg" alt="" />Offer a global stage to emerging and underrepresented voices.</li>
                        <li className="flex items-center gap-x-2 paragraph_primary"><img src="/icons/arrow_blue.svg" alt="" />Build cultural bridges through cinema.</li>
                    </ul>
                </div>
            </section >

            {/* People With Us Section */}
            <section className="w-full py-32 flex flex-col gap-y-12 px-12" >
                <h3 className="primary-heading ml-40">People <br /> with us</h3>

                <div className="grid grid-cols-6 gap-8">
                    {Array.from({ length: 12 }, () => (
                        <div className="flex items-center justify-center flex-col gap-y-1">
                            <div className="mb-2">
                                <img src="/director.png" alt="" />
                            </div>
                            <span>Lorem ipsum dolor </span>
                            <span className="uppercase text-[#47B157]">director</span>
                        </div>
                    ))}
                </div>
            </ section>

            {/* Our Sponsors */}
            <section className="flex max-w-4xl mx-auto flex-col gap-y-16 py-20" >
                <h2 className="primary-heading">Our <br />
                    Sponsors</h2>
                <div className="w-full grid grid-cols-2 gap-14">
                    {sponsers.map(sponser => (
                        <div className="flex w-full gap-y-10 items-center justify-center flex-col">
                            <div className="bg-[#FFFFFF] border-t-[5px] border-[#FF8B17] aspect-video rounded-2xl flex items-center justify-center w-full">
                                <img src={sponser.imgSrc} alt="" />
                            </div>
                            <span className="text-[#DF941C] text-2xl font-primary uppercase whitespace-pre-line">{sponser.label}</span>
                        </div>
                    ))}
                </div>
            </ section>

            {/* Become a sponser  */}
            <section className="section_primary">
                <div className="flex flex-col gap-y-14">
                    <h3 className="primary-heading">Become a <br />
                        Sponsor</h3>
                    <div className="max-w-3xl flex flex-col gap-y-6">
                        <p className="font-primary font-normal text-lg uppercase">Together, let's turn stories into impact <br /> and screens into stages for change.</p>
                        <p className="paragraph_primary">The world craves meaningful content. Film, the universal language, sparks connection and change. At DHRUMA, we celebrate better cinema, stories, and content. <br />
                            We invite bold, purpose-driven brands to shape the future of storytelling with us. Partner with DHRUMA to amplify unheard voices, champion diverse perspectives, and join a global movement transforming how the world sees, feels, and connects.
                        </p>
                    </div>

                    <img src="/join_btn.svg" alt="" className="w-64" />
                </div>

            </section>

            {/* Join Us Section */}
            < section className="flex max-w-5xl mx-auto flex-col gap-y-16 py-20 items-center justify-center " >
                <h2 className="primary-heading">
                    Join
                    us
                </h2>

                <div className="flex gap-14">
                    <img src="/pass_1.png" alt="" />
                    <img src="/pass_2.png" alt="" />
                </div>
            </ section>

            {/* Dhurma Membership Section */}
            <section className="section_primary" >
                <h3 className="primary-heading">Dhruma <br />
                    membership</h3>
                <div className="max-w-3xl space-y-4">
                    <p className="font-primary font-normal text-lg uppercase">Lorem ipsum dolor sit <br /> amet, co</p>
                    <p className="paragraph_primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                </div>
                <div>
                    <img src="/join_btn.svg" alt="" />
                </div>
            </section >
        </div >
    )
}
