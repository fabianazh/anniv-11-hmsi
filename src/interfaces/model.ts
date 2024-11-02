interface Gallery {
    id: string
    title: string
    date: string
    thumbnail: string
    photos: string[]
    keywords: string[]
    location: {
        name: string
        url: string
    }
    created_at: string
}
