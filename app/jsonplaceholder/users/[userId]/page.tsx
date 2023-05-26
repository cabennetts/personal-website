import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from 'react'
import UserPosts from "@/components/UserPosts";
import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from 'next/navigation'

type Params = {
    params: {
        userId: string
    }
}

// Generate Dynamic meta data for each user
export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData
    if (user === undefined) {
        return {
            title:"User Not Found"
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // Awaits for data from both in parallel
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    if (user === undefined) notFound()

    return (
        <>
            <h3>{user.name}</h3>
            <br/>
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData
    // SSG
    return users.map(user => {{ 
        userId: user.id.toString() 
    }})
}
