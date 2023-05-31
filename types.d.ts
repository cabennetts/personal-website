type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

type UnsplashImage = {
    "id": string| null,
    "slug": string| null,
    "created_at": string| null,
    "updated_at": string| null,
    "promoted_at": string | null,
    "width": number| null,
    "height": number| null,
    "color": string| null,
    "blur_hash": string| null,
    "description": string| null,
    "alt_description": string,
    "urls": {
      "raw": string,
      "full": string,
      "regular": string,
      "small": string,
      "thumb": string,
      "small_s3": string
    },
    "links": {
      "self": string,
      "html": string,
      "download": string,
      "download_location": string
    },
    "likes": number| null,
    "liked_by_user": boolean| null,
    "current_user_collections": [] | null,
    "sponsorship": string | null,
    "topic_submissions": {} | null,
    "user": {
      "id": string| null,
      "updated_at": string| null,
      "username": string| null,
      "name": string| null,
      "first_name": string| null,
      "last_name": string| null,
      "twitter_username": string | null,
      "portfolio_url": string | null,
      "bio": string | null,
      "location": string | null,
      "links": {
        "self": string| null,
        "html": string| null,
        "photos": string| null,
        "likes": string| null,
        "portfolio": string| null,
        "following": string| null,
        "followers": string| null,
      },
      "profile_image": {
          "small": string| null,
          "medium": string| null,
          "large": string| null,
      },
      "instagram_username": string| null,
      "total_collections": number| null,
      "total_likes": number| null,
      "total_photos": number| null,
      "accepted_tos": boolean| null,
      "for_hire": boolean| null,
      "social": {
        "instagram_username": string | null,
        "portfolio_url": string | null,
        "twitter_username": string | null,
        "paypal_email": string | null,
      }
    }
}

type BlogPost = {
  id: string,
  title: string,
  date: string,
}

type NotionPage = {
  object: string,
  id: string,
  created_time: string,
  last_edited_time: string,
  created_by: [],
  last_edited_by: [],
  cover: string | null,
  icon: string | null,
  parent: [],
  archived: boolean,
  properties: [],
  url: string
}