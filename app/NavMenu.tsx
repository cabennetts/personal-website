import Link from "next/link";
import Image from 'next/image';
// import { SignInButton, SignOutButton } from "../components/buttons";
// import AuthCheck from "@/components/AuthCheck";

export default function NavMenu(){

    return (
        <nav className="h-[70px] w-full bg-[#3f3c3c] text-[#fff] flex justify-center items-center">
            <ul className="flex p-0 items-center justify-center">
                <li className="p-2">
                    <Link href={'/'}>Home</Link>                    
                </li>
                <li className="p-2">
                    <Link href={'/about'}>About</Link>                    
                </li>
                <li className="p-2">
                    <Link href={'/projects'}>Projects</Link>                    
                </li>
                <li className="p-2">
                    <Link href={'/other'}>Other</Link> 
                </li>
                <li className="p-2">
                    <Link href={'/blog'}>Blog</Link> 
                </li>

            </ul>

        </nav>
    )
}