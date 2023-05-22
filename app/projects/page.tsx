export const dynamic = 'force-static';
import { Metadata } from "next";
import styles from './page.module.css';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

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

// async function getProjects() {
//   const res = await fetch('/api/content');
//   console.log('res', res)
//   const data = await res.json()
//   console.log('data', data)
//   return data?.items as any[];
// }


export default async function ProjectsPage(){
    
    return(
      <div>
        <h2>Projects</h2>
        {/* {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        //   return <ProjectCard key={project.slug} {...project} />;
        })} */}
      </div>
    );
}
// export default async function ProjectsPage(){
//     const projects = [
//       {
//           title: 'project one',
//           slug: 'project-one',
//           description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
//           githubRepo: 'https://www.github.com',
//           youtubeVideo: 'https://www.youtube.com',
//           liveLink: 'https://www.google.com',
//       },
//       {
//           title: 'project two',
//           slug: 'project-two',
//           description:  'Lorem ipsum dolor sit amet, adipiscing elit. Integer nec odio. Praesent libero.',
//           githubRepo: 'https://www.github.com',
//           youtubeVideo: '',
//           liveLink: 'https://www.google.com',
//       },
//       {
//           title: 'project three',
//           slug: 'project-three',
//           description:  'Lorem ipsum dolor sit amet, consectetur adipiscing. Integer nec odio. Praesent libero.',
//           githubRepo: 'https://www.github.com',
//           youtubeVideo: 'https://www.youtube.com',
//           liveLink: 'https://www.google.com',
//       },
//       {
//           title: 'project four',
//           slug: 'project-four',
//           description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer  odio. Praesent libero.',
//           githubRepo: 'https://www.github.com',
//           youtubeVideo: '',
//           liveLink: '',
//       },
//       {
//           title: 'project five',
//           slug: 'project-five',
//           description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
//           githubRepo: '',
//           youtubeVideo: '',
//           liveLink: 'https://www.google.com',
//       },
//       {
//           title: 'project six',
//           slug: 'project-six',
//           description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent.',
//           githubRepo: 'https://www.github.com',
//           youtubeVideo: 'https://www.youtube.com',
//           liveLink: 'https://www.google.com',
//       }
//     ]
    
//     return(
//       <div>
//         <h2>Projects</h2>
//         {projects.map((project) => {
//           return <ProjectCard key={project.slug} {...project} />;
//         })}
//       </div>
//     );
// }

