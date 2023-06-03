import { getPostsMeta } from '@/lib/posts';
import styles from './Posts.module.css'
import ListItem from './ListItem';

export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p>Not posts to display</p>
    }
    console.log(posts)
    return (
        <div className={styles.main}>
            <h3>Posts</h3>
            
            <ul>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>

        </div>
    )
}