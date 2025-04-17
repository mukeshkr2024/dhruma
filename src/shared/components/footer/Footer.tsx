const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Film Festival" },
    { label: "FAQ" },
    { label: "Work With Us" },
    { label: "More" }
];

export const Footer = () => {
    // Distribute links across 3 columns
    const columnCount = 3;
    const navLinksColumns = Array.from({ length: columnCount }, (_, i) =>
        navLinks.filter((_, index) => index % columnCount === i)
    );

    return (
        <footer className="w-full">
            <div className="w-full bg-[url(/footer_img.png)] bg-cover bg-no-repeat bg-center h-[300px] flex flex-col items-center justify-center" />

            <div className="bg-[#304FA8] w-full min-h-[450px] relative px-8 py-12">
                <div className="grid grid-cols-3 gap-6 text-white">
                    {navLinksColumns.map((column, colIndex) => (
                        <div key={colIndex}>
                            {column.map((item, index) => (
                                <p key={index} className="mb-2">
                                    {item.label}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                <img
                    src="/footer_bg.png"
                    alt=""
                    className="absolute h-96 bottom-0 left-1/2 transform -translate-x-1/2"
                />

            </div>
        </footer>
    );
};
