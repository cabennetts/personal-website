import styles from './page.module.css';
import Posts from './components/Posts';

export default function BlogPage() {
  return (
    <div className={styles.main}>
        <h2>Welcome to my Blog 👋🏼&nbsp;</h2>
        <Posts />
    </div>
  )
}