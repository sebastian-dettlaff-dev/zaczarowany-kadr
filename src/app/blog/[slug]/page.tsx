import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
// Importujemy typ dla treści z Sanity
import { PortableTextBlock } from "sanity"; 
import { Metadata } from "next";

interface Post {
  title: string;
  // Dokładny typ obrazka
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  // Dokładny typ treści (zamiast any)
  body: PortableTextBlock[];
  publishedAt: string;
  author: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      publishedAt,
      author->{name, image}
    }
  `;
  return client.fetch(query, { slug });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artykuł nie znaleziony",
    };
  }

  return {
    title: `${post.title} | Zaczarowany Kadr`, // To zobaczy Google i użytkownik w karcie
    description: "Przeczytaj nasz najnowszy wpis na blogu.", // Możesz dodać pole 'description' w Sanity, żeby tu wstawiać skrót
    openGraph: {
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [], // To zdjęcie pokaże się na Facebooku/LinkedIn
    },
  };
}


export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-24">
      <header className="text-center mb-10">
        <p className="text-gray-500 mb-4">
          {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
      </header>

      {post.mainImage && (
        <div className="relative w-full h-[300px] md:h-[450px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg prose-pink mx-auto">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}