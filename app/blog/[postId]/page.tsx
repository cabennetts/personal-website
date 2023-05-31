import { getSortedPosts, getPost } from "@/lib/posts"
import getFormattedDate from "@/lib/getFormattedDate"
import { notFound } from "next/navigation"
import Link from "next/link"

// Gives Static pages
export function generateStaticParams() {
    const posts = getSortedPosts()

    return posts.map((post) => {
        postId: post.id
    })
}

export function generateMetadata({ params }: { params: { postId: string} }) {

    const posts = getSortedPosts()
    const { postId } = params

    const post = posts.find(post => post.id === postId)
    
    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }
    
    return {
        title: post.title
    }
}

export default async function Post({ params }: { params: { postId: string} }) {

    const posts = getSortedPosts()
    const { postId } = params

    if(!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPost(postId)

    const pubDate = getFormattedDate(date);
    return (
        <div>
            <h1>{title}</h1>
            <p>{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/blog"> Back to blog</Link>
                </p>
            </article>
        </div>
    )
} 