// export const dynamic = 'force-static';
// "use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import type { ImageProps } from "../../utils/types";
// import cloudinary from "@/utils/cloudinary";
// import { useRouter } from "next/router";
// import { useEffect, useRef } from "react";
// import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto'
// import { GET } from "../api/other/route";
// import ImageCard from "@/components/ImageCard/ImageCard";
// import getUnsplashImages from "@/lib/getUnsplashImages";
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import { useEffect, useState } from "react";
import getAllImages from "@/lib/getUnsplashImages";
import styles from './page.module.css'
import { UnsplashImage } from "@/types";

export const metadata: Metadata = {
  title: 'Other ',
  description: 'Some things I do outside of work',
};

interface Photo  {
  id: number
  urls: { 
    large: string;
    regular: string;
    raw: string;
    small: string;
  }
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }
}

export default async function OtherPage() {
  // requests during the build
  const imageData: Promise<UnsplashImage[]> = getAllImages(1)
  const imageData2: Promise<UnsplashImage[]> = getAllImages(2)
  const imageData3: Promise<UnsplashImage[]> = getAllImages(3)

  const images = await imageData
  const images2 = await imageData2
  const images3 = await imageData3  

  return (
    // <div>
    <div className={styles.main}>
      <h1 className="text-2xl font-bold pb-2">Other Page</h1>
      <p>Some photos I have taken that are uploaded on Unsplash and displayed using their api</p>

      <ul className={styles.containerUL}>

        {images3.map(image => {
          return (
            <li key={image.id} className={styles.containerLI}>

              <Link href={image.links.html} className={styles.photoLink} >
                 <img className={styles.photo} src={image.urls.regular} alt={image.alt_description} />  
              </Link>
            </li>
            )
        })}

        {images2.map(image => {
          return (
            <li key={image.id} className={styles.containerLI}>

              <Link href={image.links.html} className={styles.photoLink} >
                 <img className={styles.photo} src={image.urls.regular} alt={image.alt_description} />  
              </Link>
            </li>
            )
        })}
          
        {images.map(image => {
          return (
            <li key={image.id} className={styles.containerLI}>

              <Link href={image.links.html} className={styles.photoLink} >
                 <img className={styles.photo} src={image.urls.regular} alt={image.alt_description} />  
              </Link>
            </li>
            )
        })}
        <li></li>
      </ul>
    </div>
  )
}
