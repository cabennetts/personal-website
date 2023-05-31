import { getSortedPosts } from '@/lib/posts';
import styles from './Posts.module.css'
import ListItem from './ListItem';


export default function Posts() {
    const posts = getSortedPosts()

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