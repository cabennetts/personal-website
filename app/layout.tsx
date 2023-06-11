import Link from "next/link";
import './global.css'
import NavMenu from "./NavMenu";
import { Inter } from 'next/font/google'
import FooterMenu from "./FooterMenu";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CABENNETTS',
  description: 'Caleb personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavMenu />
      <main>
        {children}
      </main>
      <footer>
        <FooterMenu />
      </footer>
    </html>
  )
}
