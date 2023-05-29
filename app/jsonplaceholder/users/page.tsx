import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'JSON Placeholder testing',
}

export default async function page() {
    // requests during the build
    const userData: Promise<User[]> = getAllUsers()

    const users = await userData

    const content = (
        <>
        <section>
            <h3>
                <Link href="/">Back to Home</Link>
            </h3>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/jsonplaceholder/users/${user.id}`}>{user.name}</Link>
                            <br/>
                        </p>
                    </>
                )
            })}
        </section>
        </>
    )
    return content
}
