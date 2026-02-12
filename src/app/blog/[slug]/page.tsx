// export const dynamic = "force-dynamic"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
// Importujemy typ dla treści z Sanity
import { PortableTextBlock } from "sanity"; 
import { Metadata } from "next";
import { COMPANY_NAME } from "@/lib/constants";



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
      robots: {
        index:false,
        follow: false
      }
    };
  }
  const url = `https://zaczarowanykadr.pl/blog/$[slug]`;
const  ogImage = post.mainImage ? urlFor(post.mainImage).url() : "https://zaczarowanykadr.pl/logo.png";
const isoDate = new Date(post.publishedAt).toISOString();

  return {
    title: `${post.title}`, 
    description: "Przeczytaj nasz najnowszy wpis na blogu.Dowiedz się więcej o fotografii, inspiracjach i kulisach sesji zdjęciowych z Zaczarowanym Kadrem.", 
      alternates: {
      canonical: `/blog/${slug}`, 
    },
    
    openGraph: {
      title: post.title,
      description: "Przeczytaj nasz najnowszy wpis na blogu.Dowiedz się więcej o fotografii, inspiracjach i kulisach sesji zdjęciowych z Zaczarowanym Kadrem.",
      type: 'article',
      url:url,
      publishedTime: isoDate,
      images:ogImage? [
        {
          url: ogImage, 
          width: 1200,
          height: 630,
          alt: `${post.title} - ${COMPANY_NAME}`,
        },
      ]:[],
    },
  };
}


export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }
  const articleSchema = (post: Post, slug: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `https://zaczarowanykadr.pl/blog/${slug}/#article`,
      "headline": post.title,
      "datePublished": post.publishedAt,
      
          "author": {
            "@type": "Person",
            "name": "Klaudia",
            "url": "https://zaczarowanykadr.pl/"
          }
      ,
      "image": post.mainImage ? urlFor(post.mainImage).url() : "https://zaczarowanykadr.pl/logo.png",
      "publisher": { "@id": "https://zaczarowanykadr.pl/#business" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://zaczarowanykadr.pl/blog/${slug}/#webpage`
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://zaczarowanykadr.pl/blog/${slug}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Strona Główna", "item": "https://zaczarowanykadr.pl" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://zaczarowanykadr.pl/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://zaczarowanykadr.pl/blog/${slug}` }
      ]
    }
  ]
});

  return (
    <article aria-label="Artykul" className="max-w-5xl mx-auto px-4 py-24">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post, slug)) }}
/>
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