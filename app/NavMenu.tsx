import Link from "next/link";
import Image from 'next/image';
import styles from './NavMenu.module.css';
// import { SignInButton, SignOutButton } from "../components/buttons";
// import AuthCheck from "@/components/AuthCheck";

export default function NavMenu(){

    return (
        <nav className={styles.nav}>
            {/* <Link href={'/'}>
                <Image 
                src="/next.svg"
                width={216}
                height={30}
                alt="Project Logo"
                className={styles.logo}
                /> 
            </Link> */}
            <ul className={styles.links}>
                <li>
                    <Link href={'/'}>Home</Link>                    
                </li>
                <li>
                    <Link href={'/about'}>About</Link>                    
                </li>
                <li>
                    <Link href={'/projects'}>Projects</Link>                    
                </li>
                <li>
                    <Link href={'/other'}>Other</Link> 
                </li>
                {/* <li>
                    <SignInButton/>
                </li>
                <li>
                    <AuthCheck>
                        <SignOutButton/>
                    </AuthCheck>
                </li> */}

            </ul>

        </nav>
    )
}