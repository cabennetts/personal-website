export const dynamic = 'force-static';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Other ',
  description: 'Some things I do outside of work!',
  
};

export default async function OtherPage(){
    return(
      <div>
        <h1>Other Page</h1>
        <p></p>
      </div>
    );
}