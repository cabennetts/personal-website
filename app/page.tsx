import Image from 'next/image';
import styles from './page.module.css';
import pp from '../public/Caleb Bennetts Headshot_006_FINAL.jpg';
import cv from '../public/Caleb_Bennetts_Resume.jpg';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Image src={pp}
        className={styles.profileimg}
        height={256}
        width={256}
        alt={'Headshot of me'}
      />
      
      <h2 className='text-2xl font-bold p-2'>Caleb Bennetts</h2>
      <h2 className='text-xl font-bold p-2'>Software Engineer</h2>
      {/* <h3>Career Objective</h3> */}
      {/* <span>To secure a software engineering position that allows me to leverage my strong background in computer science and problem-solving skills to design and develop efficient and effective software systems</span> */}

      <p>
        You can view my resume <span></span>
          <Link href={'./Caleb_Bennetts_Resume.pdf'}
              className={styles.resumeLink}>
            <strong>here</strong>
          </Link>
      </p>
      <div className={styles.info}>
        <span>
          Graduate from the University of Kansas with a <strong>B.S. in Computer Science</strong>. During my time I have completed multiple projects and worked as a freelancer for a small time as well. With this experience, I have become an efficient software engineer. The main languages I have developed fluency in are <strong>C++</strong>, <strong>Python</strong>, <strong>Javascript</strong>, <strong>MySQL</strong>, <strong>React.js</strong> and <strong>Next.js</strong>.
          <br/><br/>
          Studying at KU has given me hands-on experience in some highly relevant languages. The first couple of years relied heavily on <strong>C++</strong> for multiple classes. Learning <strong>C++</strong> as my first primary language has set the foundation for learning many other languages and allows me to grasp concepts of other languages in an efficient and effective manner.
          <br/><br/>
          In my early time at KU I also learned <strong>Javascript</strong>, <strong>HTML</strong>, <strong>CSS</strong> and gained interest in web application development. On my free time I have built out multiple versions of my own website starting with the basics, then using a framework, and now incorporating an entire backend and database. I have spent a lot of time on my own learning about Front-End development and now Back-End development tying them together to become an efficient Full-Stack Developer.
          <br/><br/>
          In my third year at KU, I took a databases class built out an application with database support. I built out a web app that was a new idea for a social media. Some features include User SignUp/SignIn, Users can make posts, follow friends, like posts, see followers and following. From this project I developed fluency in <strong>PHP</strong>, <strong>MySQL</strong>, and best <strong>RDBMS</strong> practices.
          <br/><br/>
          I worked as a freelancer for a small time and helped develop IVRs for insurance companies. I designed, developed, and tested these systems. This allowed for real-world experiences to go alongside my education.
          <br/><br/>
          In my senior year I worked on a <strong>AI/ML</strong> application that can translate Sign Language Signs and complete sentences into english text. From this project I have solidified my skills in <strong>Python</strong>, <strong>React</strong>, full stack development, and the design of <strong>Machine Learning</strong> models and techniques to ensure the model produces the highest accuracy for the best results. This is one of multiple group-based projects I have participated in in my time at KU that have solidified my skills in Team based projects.
        </span>
      </div>
    </div>
  )
}
