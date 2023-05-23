import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
    const client = await db.connect();
    const data = await client.sql`SELECT * FROM projects;`;
    console.log(data);
    return NextResponse.json(data);
}