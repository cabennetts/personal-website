import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'JSON Placeholder testing',
}

export default async function page() {
   
    return (
        <div>Page for displaying some testing</div>
    )
}
