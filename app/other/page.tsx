export const dynamic = 'force-static';
// "use client";
import { Metadata } from "next";
import Image from "next/image";
import type { ImageProps } from "../../utils/types";
import cloudinary from "@/utils/cloudinary";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto'
import { GET } from "../api/other/route";
import ImageCard from "@/components/ImageCard/ImageCard";

export const metadata: Metadata = {
  title: 'Other ',
  description: 'Some things I do outside of work!',
};

export default async function OtherPage() {
  // const images = await getStaticProps();
  // console.log(images);

  return(
      <div>
        <h1>Other Page</h1>
        <p>Some photos I have taken</p>

        {/* {images.map((image) => (
            return <ImageCard key={image.id}
          ))} */}
      </div>
    );
}


