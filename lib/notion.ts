
import React from "react";
import { Client } from '@notionhq/client'
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_SECRET_KEY,
});

export async function fetchPages() {
    const res = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        // filter: {
        //     property: "Status",
        //     select: {
        //         equals: "Published",
        //     }
        // }
    })
    
    console.log(res)
    return res.results
}
// export const fetchPages = React.cache(() => {
//     return notion.databases.query({
//         database_id: process.env.NOTION_DATABASE_ID!,
//         filter: {
//             property: "Status",
//             select: {
//                 equals: "Published",
//             }
//         }
//     })
// })

// export const fetchPageBySlug = React.cache((slug: string) => {
//     return notion.databases
//         .query({
//             database_id: process.env.NOTION_DATABASE_ID!,
//             filter: {
//                 property: "Slug",
//                 rich_text: {
//                     equals: slug,
//                 }
//             }
//         })
//         .then((res) => res.results[0] as PageObjectResponse | undefined);
// })

// export const fetchPageBlocks = React.cache((pageId: string ) => {
//     return notion.blocks.children   
//         .list({ block_id: pageId })
//         .then((res) => res.results as BlockObjectResponse[]);
// })