import Link from "next/link";
import styles from './page.module.css';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa';
import { db } from '@vercel/postgres';

interface Project {
    title: string;
    slug: string;
    description: string;
    githubRepo: string;
    youtubeVideo: string;
    liveLink: string;
    language: string;
}

interface Props {
    params: { slug: string };
}

export default async function ProjectItemPage({ params }: Props){
 
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM projects WHERE slug = ${params.slug};`;
    // Searching through api to find match of slug then displaying data
    const project = rows.find((project) => project.slug === params.slug)!;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>

            {/* PROJECT IMAGE */}
            {/* <img 
                src={image ?? '/mememan.webp'}
                alt={`${title} image`}
                className={styles.cardImage}
            /> */}

            <p><strong>Languages used:</strong> {project.language}</p>
            
            {/* PROJECT LINKS */}
            <span className={styles.pushLeft}>
                <ul className={styles.links}>
                    {project.githubrepo  !== '' ? 
                        <li>
                            <Link href={`${project.githubrepo}`}>
                                <FaGithub 
                                width={32}
                                height={32}
                                />
                            </Link>
                        </li>
                        :  
                        <li className={styles.hidden}></li>
                    } 
                    {project.youtubevideo !== '' ? 
                        <li>
                            <Link href={`${project.youtubevideo}`}>
                                <FaYoutube
                                width={32}
                                height={32}
                                />
                            </Link>
                        </li>
                        : 
                        <li className={styles.hidden}></li>
                    }
                    {project.livelink !== '' ?
                        <li>
                            <Link href={`${project.livelink}`}>
                                <FaLink
                                width={32}
                                height={32}
                                />
                            </Link>
                        </li>
                        : 
                        <li className={styles.hidden}></li>
                    }
                </ul>
            </span>
        </div>
    )
}