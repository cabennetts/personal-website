export default async function getAllImages() {

    const res = await fetch(`https://api.unsplash.com/users/cabennetts/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&order_by=popular&page=1`)
    // const res2 = await fetch(`https://api.unsplash.com/users/cabennetts/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&order_by=popular&page=2`)
    
    if(!res.ok) throw new Error('failed to fetch data')
    // if(!res.ok || !res2.ok) throw new Error('failed to fetch data')
    
    // res.json()
    // res2.json()
    
    return res.json()
}