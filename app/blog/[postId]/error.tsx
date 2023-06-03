'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void
}) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <main>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}> Try again </button>
            <p>Or go back to <Link href="/blog">Blog</Link></p>
        </main>
    )
}