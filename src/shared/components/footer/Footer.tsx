import { useEffect, useState } from "react"

const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Film Festival" },
    { label: "FAQ" },
    { label: "Work With Us" },
    { label: "More" },
]

export const Footer = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    const columnCount = 3
    const navLinksColumns = Array.from({ length: columnCount }, (_, i) =>
        navLinks.filter((_, index) => index % columnCount === i)
    )

    return (
        <footer className="w-full">
            <div
                className="w-full bg-[url(/footer_img.png)] bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] flex flex-col items-center justify-center"
            />

            <div className="bg-[#304FA8] w-full min-h-[350px] md:min-h-[450px] relative px-4 md:px-8 py-8 md:py-12 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white max-w-4xl mx-auto relative z-10">
                    {navLinksColumns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col items-center md:items-start">
                            {column.map((item, index) => (
                                <p
                                    key={index}
                                    className="mb-3 hover:text-yellow-200 transition-colors duration-300 cursor-pointer"
                                >
                                    {item.label}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                <img
                    src="/footer_bg.png"
                    alt=""
                    className="absolute h-64 md:h-80 bottom-0 left-1/2 transform -translate-x-1/2 md:opacity-100"
                />
            </div>
        </footer>
    )
}
