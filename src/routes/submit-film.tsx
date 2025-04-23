import { SubmitFilm } from '@/features/sponsor/components/SubmitFilm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/submit-film')({
    component: SubmitFilm,
})