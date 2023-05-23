export const dynamic = 'force-static';
import { Metadata } from "next";
import styles from './page.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Some projects I have completed during my time at school and on my own time!',
  
};

interface Project {
    title: string;
    slug: string;
    description: string;
    githubRepo: string;
    youtubeVideo: string;
    liveLink: string;
    language: string;
}

async function getProjects() {
  const client = await db.connect();
  const data = await (await client.sql`SELECT * FROM projects;`).rows;
  
  return data;
}

export default async function ProjectsPage() {
 
  const projects = await getProjects();
  
  return(
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return <ProjectCard title={project.title} slug={project.slug} description={project.description} githubRepo={project.githubRepo} youtubeVideo={project.youtubeVideo} liveLink={project.liveLink} language={project.language} key={project.slug} {...project} />;
      })}
    </div>
  );
}