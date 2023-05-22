export const dynamic = 'force-static';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Resume',
  description: '',
  
};

export default async function ResumePage(){
    return(
      <div>
        <h1>Resume Page</h1>
        
      </div>
    );
}