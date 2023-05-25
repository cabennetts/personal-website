import Link from "next/link";
import Image from 'next/image';
import styles from './FooterMenu.module.css';
import { FaGithub, FaUnsplash, FaLinkedin } from 'react-icons/fa';

export default function FooterMenu(){

    return (
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li>
                    <Link href={'https://github.com/cabennetts'}>
                        <FaGithub
                            width={40}
                            height={40}
                        />
                    </Link>                    
                </li>
                <li>
                    <Link href={'https://www.linkedin.com/in/cabennetts/'}>
                        <FaLinkedin
                            width={40}
                            height={40}
                        />
                    </Link>                    
                </li>
                <li>
                    <Link href={'https://unsplash.com/@cabennetts'}>
                        <FaUnsplash
                            width={40}
                            height={40}
                        />
                    </Link>                    
                </li>
            </ul>
        </nav>
    )
}