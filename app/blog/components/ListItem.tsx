import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
    post: BlogPost
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