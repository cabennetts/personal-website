import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { Meta } from '@/types'

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li>
            <Link
                href={`/blog/${id}`}
            >
                {title}
            </Link>
            <br/>
            <p>{formattedDate}</p>
        </li>
    )
}