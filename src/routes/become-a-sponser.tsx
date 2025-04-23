import { BecomeASponsor } from '@/features/sponsers/components/BecomeASponsor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/become-a-sponser')({
    component: BecomeASponsor,
})
