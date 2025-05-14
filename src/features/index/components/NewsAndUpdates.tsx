import { BlogCard } from "@/shared/components/blogs/BlogCard"

const news = [
    {
        title: "New Feature Release",
        description: "We are excited to announce the release of our new feature that will enhance your experience.",
        imageSrc: "/news/news1.jpeg",
    }, {
        title: "Maintenance Update",
        description: "Scheduled maintenance will occur on Saturday, 10 AM - 2 PM. Please plan accordingly.",
        imageSrc: "/news/news2.jpeg",
    }, {
        title: "Community Event",
        description: "Join us for our upcoming community event on Friday at 5 PM. Don't miss out!",
        imageSrc: "/news/news3.jpeg",
    }, {
        title: "New Partnership",
        description: "We are thrilled to announce our new partnership with XYZ Company to bring you even better services.",
        imageSrc: "/news/news4.jpeg",
    },
]

export const NewsAndUpdates = () => {
    return (
        <div className="w-full flex items-center flex-col justify-center py-10 md:py-20 space-y-10 md:space-y-14 px-4 md:px-10 ">
            <h2 className="primary-heading">
                News & <br />
                Updates
            </h2>
            <div
                className="grid w-full grid-cols-1 gap-3
                            sm:grid-cols-2 sm:gap-4
                            md:grid-cols-2 md:gap-5
                            lg:grid-cols-3 lg:gap-6
                            xl:grid-cols-4 xl:gap-8"
            >
                {
                    news.map((item, index) => (
                        <BlogCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            imgSrc={item.imageSrc}
                        />
                    ))
                }
            </div>
        </div>
    )
}
