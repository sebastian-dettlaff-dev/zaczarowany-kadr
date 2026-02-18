import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://zaczarowanykadr.pl';

    // Static pages
    const staticPages = [
        '',
        '/portfolio',
        '/oferta',
        '/cennik',
        '/blog',
        '/kontakt',
        '/faq',
        '/regulamin',
        '/polityka',
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: path === '' ? 1 : 0.8,
    }));

    // Downloaing blog posts from sanity and mapping them to sitemap format
    const query = `*[_type == "post"] { "slug": slug.current, _updatedAt }`;
    const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(query);

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // 3. Łączymy obie listy
    return [...staticPages, ...blogPosts];
}