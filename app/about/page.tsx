export const dynamic = 'force-static';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me',
  description: 'I am a graduate from the University of Kansas with a Bachelors degree in Computer Science!',
  
};

export default async function About(){
    return(
      <div>
        <h1>About Page</h1>
        <p>This app is made using Next.js 13!</p>
        <p>I am a graduate from the University of Kansas with a Bachelors degree in Computer Science!</p>
      </div>
    );
}