import { FilmLineUp } from '@/features/film-lineup/components/FilmLineUp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/film-lineup')({
    component: FilmLineUp,
})

