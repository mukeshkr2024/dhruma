import { Outlet, createRootRoute } from '@tanstack/react-router'
import { RootLayout } from '@/shared/layouts/RootLayout'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootLayout>
            <Outlet />
        </RootLayout>
    )
}
