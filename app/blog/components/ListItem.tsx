import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { Meta } from '@/types'
import styles from './ListItem.module.css'

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className={styles.link}>
            <Link
            className={styles.post}
                href={`/blog/${id}`}
            >
                {title}
            </Link>
            <br/>
            <p className={styles.date}>{formattedDate}</p>
        </li>
    )
}