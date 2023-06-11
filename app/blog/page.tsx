import styles from './page.module.css';
import Posts from './components/Posts';

export const revalidate = 10

export default function BlogPage() {
  return (
    <div className={styles.main}>
        <h2 className='text-2xl font-bold pb-2'>Welcome to my Blog 👋🏼&nbsp;</h2>
        {/* @ts-expect-error Server Component */}
        <Posts />
    </div>
  )
}