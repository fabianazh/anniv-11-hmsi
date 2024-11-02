import { galleries } from '@/constants/model'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://'

    const galleriesData = galleries.map((gallery) => ({
        url: `${baseUrl}/gallery/${gallery.id}`,
        lastModified: new Date(),
        priority: 0.9,
    }))

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...galleriesData,
    ]
}
