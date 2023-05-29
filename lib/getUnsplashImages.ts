export default async function getAllImages() {

    const res = await fetch(`https://api.unsplash.com/users/cabennetts/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&order_by=popular`)

    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}