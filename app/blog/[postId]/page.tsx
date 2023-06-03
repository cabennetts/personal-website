import { getPostsMeta, getPostByName } from "@/lib/posts"
import getFormattedDate from "@/lib/getFormattedDate"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/devibeans.css'
import styles from './page.module.css'
export const revalidate = 60;

type Props = {
    params: {
        postId: string,
    }
}

// Gives Static pages
export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduplicated by nextjs

    if( !posts) { return [] }
    
    return posts.map((post) => {
        postId: post.id
    })
}

export async function generateMetadata({ params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduplicated by nextjs

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }
    
    return {
        title: post.meta.title
    }
}

export default async function Post({ params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduplicated by nextjs

    if(!post) return notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag, i) => (
        <Link className={styles.pTag} key={i} href={`/blog/tags/${tag}`}>#{tag}</Link>
    ))
    return (
        <div className={styles.main}>
            <h1>{meta.title}</h1>
            <p>🗓 {pubDate}</p>
            <article> { content } </article>
            <section className={styles.section}> 
                <h4>Related:</h4>
                <div className={styles.tags}> {tags} </div>
            </section>
            <p className={styles.foot}>
                👈🏼 <Link className={styles.linkBack} href="/blog">Back to blog</Link>
            </p>
        </div>
    )
} 