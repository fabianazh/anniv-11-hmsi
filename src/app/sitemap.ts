import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "https://anniv-hmsi.vercel.app";

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ];
}
