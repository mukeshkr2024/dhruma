

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

export const Home = () => {
    return (
        <div className="w-full h-full">
            {/* Hero Section  */}

            <section>
                {/* TODO: */}
            </section>

            {/* Who Are We Section */}
            <section className="flex max-w-5xl mx-auto py-20 gap-20">
                <div className="flex-1 flex justify-end items-center">
                    <img src="/logo.svg" className="w-[280px]" />
                </div>
                <div className="flex-1 flex flex-col gap-y-4">
                    <h2 className="text-[#224095] text-5xl font-bold uppercase">Who <br />
                        are we</h2>
                    <p className="font-normal">Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and mission.</p>

                    <div className="flex
                     items-center gap-x-1.5">
                        {socialIcons.map(icon => <img src={`/icons/${icon.imgSrc}`} />)}
                    </div>
                </div>
            </section>


            {/*  Section */}
            <section className="flex max-w-5xl mx-auto py-20 gap-20">
                <div className="flex-1 flex flex-col gap-y-4">
                    <h2 className="text-[#224095] text-5xl font-bold uppercase">Submit a <br /> Film</h2>
                    <p className="font-normal">Dhruma film festival celebrates diversity. A platform where every story, every perspective, and every voice matters. So even the smallest of voices don't go unheard. From every nook and corner of the world, we bring you tales of all ethnicities, genders, backgrounds, and experiences. A space where these diverse narratives come alive and are celebrated. Blend with them and give me a better more powerful intro with a vision and mission.</p>

                    <div className="flex
                     items-center gap-x-1.5">
                        {socialIcons.map(icon => <img src={`/icons/${icon.imgSrc}`} />)}
                    </div>
                </div>
                <div className="flex-1 flex justify-start items-center">
                    <img src="/scene_take.png" className="w-[280px]" />
                </div>
            </section>

            {/* Black Circle Section */}
            <div className="flex w-full z-0 items-center justify-center -mb-90">
                <div className="w-[800px] relative">
                    <img src="/wheel.png" alt="" />
                    <div className="absolute w-full top-40">
                        <div className="w-full gap-y-8 flex items-center justify-center flex-col">
                            <img src="/white_logo.svg" alt="" />
                            <p className=" text-sm max-w-lg text-white text-center">
                                DHRUMA Film Festival is a bold celebration of diversity, truth, and transformative storytelling. It is a platform where every story, every perspective, and every voice matters — ensuring that even the quietest voices are heard loud and clear. From bustling cities to the most remote corners of the world, DHRUMA curates and showcases films that span ethnicities, genders, cultures, and experiences. It is a sanctuary for stories that challenge, uplift, and inspire. A space where global narratives converge, collide, and come alive — unfiltered, unapologetic, and unforgettable.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <section className="flex absolute w-full z-10 max-h-[380px]">
                <div className="w-[40%]">
                    <img
                        src="/mission_img.png"
                        alt="mission image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-[60%] flex flex-col gap-y-3 p-8 bg-[#304FA8]">
                    <h3 className="uppercase text-white text-5xl font-bold">Our <br /> Mission</h3>
                    <p className="text-white max-w-2xl">To amplify underrepresented voices through the universal language of film. <br />
                        To curate content that speaks to the heart, questions the norm, and transcends borders.
                        <br />
                        To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and diverse.
                    </p>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="flex w-full max-h-[380px] mt-[376px]">
                <div className="w-[60%] flex flex-col gap-y-3 p-8 bg-[#D3D3D3]">
                    <h3 className="uppercase text-5xl font-bold text-[#224095]">Our <br /> Vision</h3>
                    <p className="text-black max-w-2xl">To amplify underrepresented voices through the universal language of film. <br />
                        To curate content that speaks to the heart, questions the norm, and transcends borders.
                        <br />
                        To create an inclusive festival that reflects the true spectrum of humanity — bold, beautiful, and diverse.
                    </p>
                </div>
                <div className="w-[40%]">
                    <img
                        src="/mission_img.png"
                        alt="mission image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            {/* Our Values Section */}
            <section className="pt-10 pb-16 flex bg-[#E6EBDF] items-center justify-center">
                <div className="space-y-8">
                    <h3 className="uppercase text-5xl ml-5 font-bold text-[#224095]">Our <br /> values</h3>
                    <ul className="space-y-1.5">
                        <li className="flex items-center gap-x-2"><img src="/icons/arrow_blue.svg" alt="" />Celebrate diverse and inclusive storytelling.</li>
                        <li className="flex items-center gap-x-2"><img src="/icons/arrow_blue.svg" alt="" />Offer a global stage to emerging and underrepresented voices.</li>
                        <li className="flex items-center gap-x-2"><img src="/icons/arrow_blue.svg" alt="" />Build cultural bridges through cinema.</li>
                    </ul>
                </div>
            </section>

            {/* People With Us Section */}
            <section className="w-full py-14 flex flex-col gap-y-12 px-12">
                <h3 className="uppercase text-5xl ml-5 font-bold text-[#224095]">People <br /> with us</h3>

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
            </section>
        </div>
    )
}
