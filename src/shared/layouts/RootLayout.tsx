import { PropsWithChildren } from "react"

export const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}
