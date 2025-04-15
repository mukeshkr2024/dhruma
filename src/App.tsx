import { Home } from "./features/index"
import { RootLayout } from "./shared/layouts/RootLayout"

export const App = () => {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  )
}
