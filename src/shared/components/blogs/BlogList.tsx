"use client"

import { motion } from "framer-motion"
import { BlogCard } from "./BlogCard"

const blogs = [
    {
        title: "The Future of Web Development: Trends to Watch in 2025",
        description:
            "Explore the latest trends in web development, including the rise of AI, serverless architecture, and web assembly.",
    },
    {
        title: "How to Secure Your WordPress Site: Best Practices",
        description:
            "A comprehensive guide to securing WordPress sites with tips on plugins, security practices, and hardening your site against common threats.",
    },
    {
        title: "Optimizing Performance in React Applications",
        description:
            "Tips and strategies for enhancing the performance of React apps, including code splitting, lazy loading, and caching techniques.",
    },
    {
        title: "The Importance of Microservices in Modern Application Architecture",
        description:
            "An in-depth look at the benefits of microservices, how to implement them, and real-world use cases of microservices architecture.",
    },
    {
        title: "Exploring Headless CMS: Benefits for Modern Websites",
        description:
            "Discuss the advantages of using headless CMS, such as flexibility, scalability, and seamless integration with modern frontend technologies.",
    },
    {
        title: "Building Scalable Cloud Applications with AWS",
        description:
            "A practical guide to designing cloud-native applications using AWS, covering services like EC2, Lambda, and S3, along with best practices for scalability.",
    },
    {
        title: "CI/CD Best Practices for Agile Development",
        description:
            "Learn how to implement effective Continuous Integration and Continuous Deployment pipelines in an agile development environment to streamline software delivery.",
    },
    {
        title: "Elasticsearch for Beginners: How to Get Started",
        description:
            "A beginner-friendly introduction to Elasticsearch, covering installation, setup, and creating your first search engine.",
    },
    {
        title: "Creating a Powerful Job Portal: Features and Best Practices",
        description:
            "An exploration of key features needed to build a job portal, including job filtering, user authentication, and real-time notifications.",
    },
    {
        title: "Building a Secure E-Learning Platform: Key Considerations",
        description:
            "A guide on how to build a secure and user-friendly e-learning platform, including considerations for student data protection, content management, and accessibility.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
}

export const BlogList = () => {
    return (
        <motion.div
            className="grid w-full grid-cols-1 gap-3
                            sm:grid-cols-2 sm:gap-4
                            md:grid-cols-2 md:gap-5
                            lg:grid-cols-3 lg:gap-6
                            xl:grid-cols-4 xl:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
        >
            {blogs.map((blog, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                    <BlogCard
                        title={blog.title}
                        description={blog.description}
                        imgSrc={`/blog_1.png`}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}
