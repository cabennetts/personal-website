import { getPostsMeta } from '@/lib/posts';
import styles from './Posts.module.css'
import ListItem from './ListItem';

export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p>Not posts to display</p>
    }

    return (
        <div className={styles.main}>
            
            <ul className={styles.list}>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>

        </div>
    )
}