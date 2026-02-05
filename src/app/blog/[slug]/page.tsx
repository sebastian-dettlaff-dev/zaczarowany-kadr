// export const dynamic = "force-dynamic"
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
  return client.fetch(query, { slug },
    {
      next: {tags: ['posts']}
    }
  );
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
    title: `${post.title} | Zaczarowany Kadr`, 
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
    <article className="max-w-5xl mx-auto px-4 py-24">
      {/* <header className="mb-10 mt-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
          <div className="bg-retro-grey flex flex-col p-1 border border-gray-50 ">
            <p className=" text-gray-500 mb-4">
          {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
        </p>
          </div>
        
      </header> */}
      <header className="mb-12 mt-10 text-center">
  {/* Nadtytuł z datą */}
  <div className="flex items-center justify-center gap-4 mb-6">
    <span className="h-[1px] w-10 bg-retro-orange/40"></span>
    <p className="text-retro-orange font-mono text-sm uppercase tracking-widest">
      {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
    </p>
    <span className="h-[1px] w-10 bg-retro-orange/40"></span>
  </div>
      
  <h1 className="text-4xl md:text-6xl font-serif text-retro-black mb-8 leading-tight italic">
    {post.title}
  </h1>
</header>
      {post.mainImage && (
        <div className="relative w-full  mb-10 rounded-sm overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            sizes="(max-width:768px),100vw,1200px"
            className="object-cover object-top"
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