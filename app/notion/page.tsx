import { fetchPages, notion } from "@/lib/notion";
// import { fetchPages, fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljs from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";


export default async function page() {
  // const imageData: Promise<UnsplashImage[]> = getAllImages()
  // const posts: Promise<NotionPage[]> = fetchPages();
  const posts = await fetchPages();  
  
  return (
    <div>
      <h3>My blog using Notion as a Database</h3>
      
    </div>
  )
}