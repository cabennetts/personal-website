import Link from "next/link";
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa';

interface Props {
    // title, slug, description, github, youtube
    title: string | null;
    slug: string | null;
    description: string | null;
    githubRepo: string | null;
    youtubeVideo: string | null;
    liveLink: string | null;
}

export default function ProjectCard({ title, slug, description, githubRepo, youtubeVideo, liveLink }: Props){
    return (
        <div className={styles.card}>
            {/* PROJECT IMAGE */}
            {/* <img 
                src={image ?? '/mememan.webp'}
                alt={`${title} image`}
                className={styles.cardImage}
            /> */}

            {/* PROJECT CONTENT */}
            <div className={styles.cardContent}>
                <h4>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h4>
                <p className={styles.description}>Description: {description}</p>
            </div>

            {/* PROJECT LINKS */}
            <div className={styles.linkContainer}>
                <ul className={styles.links}>
                    <li>
                        <Link href={`${githubRepo}`}>
                            <FaGithub 
                            width={32}
                            height={32}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={`${youtubeVideo}`}>
                            <FaYoutube
                            width={32}
                            height={32}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={`${liveLink}`}>
                            <FaLink
                            width={32}
                            height={32}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}