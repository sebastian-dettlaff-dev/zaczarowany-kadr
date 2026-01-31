import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { COMPANY_NAME } from "@/lib/constants";

// Definicja dokładnego typu posta (bez używania 'any')
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  // Mówimy, że mainImage jest opcjonalny (?) i ma konkretną budowę
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  excerpt: string;
}

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "excerpt": body[0].children[0].text 
}`;

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(QUERY);

  return (
    <main className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-retro-black">{COMPANY_NAME} - dowiedz sie wiecej o fotografi.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug.current}`}
            className="group hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-100 bg-white"
          >
            {/* Wyświetlamy zdjęcie tylko, jeśli post.mainImage istnieje */}
            {post.mainImage && (
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            
            <div className="p-6">
              <p className="text-sm text-retro-black mb-2">
                {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
              </p>
              <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-retro-orange transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-gray-600 line-clamp-3 text-sm">
                  {post.excerpt}...
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}