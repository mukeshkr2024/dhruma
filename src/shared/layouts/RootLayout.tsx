import { PropsWithChildren } from "react"
import { NavBar } from "../components/navbar/NavBar"
import { Footer } from "../components/footer/Footer"

export const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FFF1]">
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
