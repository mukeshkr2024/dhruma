import { NewsDetail } from '@/features/news-detail/components/NewsDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/$title')({
    component: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { title } = Route.useParams()
        return (
            <NewsDetail title={title} />
        )
    }
})
