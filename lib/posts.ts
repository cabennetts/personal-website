import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPosts() {
    
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterRes = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterRes.data.title,
            date: matterRes.data.date,
        }

        return blogPost
    });

    return allPosts.sort((a,b) => a.date < b.date ? 1 : -1);
}

export async function getPost(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterRes = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterRes.content);
    
    const contentHtml = processedContent.toString();

    const blogPostWithHtml: BlogPost & { contentHtml: string } = {
        id,
        title: matterRes.data.title,
        date: matterRes.data.date,
        contentHtml,
    }
    
    return blogPostWithHtml
}