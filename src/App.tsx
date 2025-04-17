import { Home } from "./features/components/index"
import { RootLayout } from "./shared/layouts/RootLayout"

export const App = () => {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  )
}
