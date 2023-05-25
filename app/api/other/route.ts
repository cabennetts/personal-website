import cloudinary from "@/utils/cloudinary"
import type { ImageProps } from "@/utils/types"

export async function GET() {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute()
    let reducedResults: ImageProps[] = []
  
    let i = 0
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      })
      i++
    }
  
    return {
      props: {
        images: reducedResults,
      },
    }
  }