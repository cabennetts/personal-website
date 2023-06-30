import Image from 'next/image';
import pp from '../public/Caleb Bennetts Headshot_006_FINAL.jpg';
import cv from '../public/Caleb_Bennetts_Resume.jpg';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-2 min-h-[100vh] leading-8">
      <Image src={pp}
        className=""
        height={256}
        width={256}
        alt={'Headshot of Caleb Bennetts'}
      />
      
      <h2 className='text-2xl font-bold p-2'>Caleb Bennetts</h2>
      <h2 className='text-xl font-bold p-2'>Software Engineer</h2>
      {/* <h3>Career Objective</h3> */}
      {/* <span>To secure a software engineering position that allows me to leverage my strong background in computer science and problem-solving skills to design and develop efficient and effective software systems</span> */}

      <p>
        You can view my resume <span></span>
          <Link href={'./Caleb_Bennetts_Resume.pdf'}
              className="font-bold text-[#0000ff]">
            <strong>here</strong>
          </Link>
      </p>
      <div className="w-full">
        <span>
          Graduate from the University of Kansas with a <strong>B.S. in Computer Science</strong>. During my time I have completed multiple projects and worked as a freelancer for a small time as well. With this experience, I have become an efficient software engineer. The main languages I have developed fluency in are <strong>C++</strong>, <strong>Python</strong>, <strong>Javascript</strong>, <strong>MySQL</strong>, <strong>React.js</strong> and <strong>Next.js</strong>.
          <br/><br/>

          
            
          {/* Studying at KU has given me hands-on experience in some highly relevant languages. Learning <strong>C++</strong> as my first primary language has set the foundation for learning many other languages and allows me to grasp concepts of other languages in an efficient and effective manner.         */}
          {/* <br/><br/> */}
          {/* I worked as a freelancer for a small time and helped develop IVRs for insurance companies. I designed, developed, and tested these systems. This allowed for real-world experiences to go alongside my education. */}
          {/* <br/><br/> */}
          {/* In my senior year I worked on a <strong>AI/ML</strong> application that can translate Sign Language Signs and complete sentences into english text. From this project I have solidified my skills in <strong>Python</strong>, <strong>React</strong>, full stack development, and the design of <strong>Machine Learning</strong> models and techniques to ensure the model produces the highest accuracy for the best results. This is one of multiple group-based projects I have participated in in my time at KU that have solidified my skills in Team based projects. */}
        </span>

        <div className='w-full flex flex-col justify-center content-center sm:flex-row'>
        <div className='bg-slate-200 flex flex-col rounded-xl items-center min-h-[420px] min-w-[200px]  m-4'>
            <h3 className='p-4 text-xl font-bold '>Proficient</h3>
            <ul className='px-6 list-disc'>
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>C++</li>
              <li>HTML/CSS</li>
              <li>Machine Learning</li>
              <li>MySQL</li>
              <li>postgres</li>
            </ul>
          </div>

          <div className='bg-slate-200 flex flex-col rounded-xl m-4 min-h-[420px] min-w-[200px] items-center'>
            <h3 className='p-4 text-xl font-bold '>Familiar</h3>
            <ul className='px-6 list-disc '>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Haskell</li>
              <li>postgres</li>
              <li>Firebase</li>
              <li>GCP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
