import Link from "next/link"

export default function NotFound() {
    return (
        <>
            <h3>The requested post does not exist</h3>
            <Link href='/blog'>Back to Blog Page</Link>
        </>
    )
}