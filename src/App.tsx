import { Home } from "./features/index/components/Home"
import { RootLayout } from "./shared/layouts/RootLayout"

export const App = () => {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  )
}
