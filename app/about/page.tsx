export const dynamic = 'force-static';
import { Metadata } from "next";
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'I am a graduate from the University of Kansas with a Bachelors degree in Computer Science!',
  
};

export default async function About(){
    return(
      <div className={styles.main}>
        <h1>About Page</h1>
        
        <p>I am a graduate from the University of Kansas with a Bachelors degree in Computer Science!</p>
        <h4 className={styles.topics}>Where am I from?</h4>
        <p>I&apos;m a Kansas native who was born and raised in Leavenworth. I lived in Lawrence while for about half of my time at KU. Now I currently live in Olathe.</p>
      
        <h4 className={styles.topics}>Why KU?</h4>
        <p>Growing up I always knew I wanted to go to KU. I also wanted to be close to home and did not want to study out of state.</p>
      
        <h4 className={styles.topics}>Why Computer Science?</h4>
        <p>Growing up I was always fascinated with computers and technology. I was always able to &ldquo;fix&rdquo; something when it went wrong. I played a lot of video games and from that learned a lot about how computers worked. I love challenging myself and learning new things. I chose Computer Science because the industry is constantly evolving and new technology comes out everyday meaning that there is always something new I can learn.</p>
      </div>
    );
}