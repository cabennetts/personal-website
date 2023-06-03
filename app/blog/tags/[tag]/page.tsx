import { getPostsMeta } from "@/lib/posts";
import ListItem from "../../components/ListItem";
import Link from "next/link";

export const revalidate = 60;

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() // deduplicated by Nextjs

    if (!posts) return []

    // Wrap in set to remove duplicates
    const tags = new Set(posts.map(post => post.tags).flat())
    // Create objects needed by mapping Array from tags 
    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag }} : Props) {
    // check for no tag

    return {
        title: `Posts with tag ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props){
    const posts = await getPostsMeta() // deduplicated by nextjs

    if(!posts) return <p>No posts to display</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if(!tagPosts.length){
        return (
            <div>
                <p>no posts for that keyword</p>
                <Link href='/blog'>Back to blog</Link>
            </div>
        )
    }

    return (
        <>
            <h2>Results for: #{tag}</h2>
            <section>
                <ul>
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </>
    )
}