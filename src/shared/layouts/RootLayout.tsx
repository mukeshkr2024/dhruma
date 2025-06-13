import { PropsWithChildren } from "react"
import { NavBar } from "../components/navbar/NavBar"
import { Footer } from "../components/footer/Footer"
// import { HeaderBanner } from "../components/HeaderBanner"

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#F9FFF1]">
      {/* <HeaderBanner /> */}
      <NavBar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  )
}
