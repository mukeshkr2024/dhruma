

const navLinks: { name: string; path: string }[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Film lineup",
        path: "#"
    },
    {
        name: "Schedule",
        path: "#"
    }
]

export const NavBar = () => {
    return (
        <header className="w-full ">
            <nav className="flex justify-between items-center mih-h-16 px-10 py-2">
                <div>
                    <div>
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-x-12">
                    <div className="flex items-center gap-x-12">
                        {navLinks.map((link) => <a key={link.name} href={link.path} className="uppercase">{link.name}</a>)}
                    </div>

                    <div className="flex items-center gap-x-8">
                        <img src="./become_sponser_btn.svg" alt="" />
                        <img src="./book_now_btn.svg" alt="" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
