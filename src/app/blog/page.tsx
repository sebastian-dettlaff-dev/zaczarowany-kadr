
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { COMPANY_NAME } from "@/lib/constants";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
 mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  excerpt: string;
}

const POSTS_PER_PAGE = 7;

export default async function BlogPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  
  const sParams = await props.searchParams;
  const currentPage = Math.max(1, parseInt(sParams.page || "1"));
  
  // 2. Obliczamy zakresy dla Sanity
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;


  const QUERY = `*[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": body[0].children[0].text 
  }`;

  const TOTAL_QUERY = `count(*[_type == "post"])`;

  const [posts, totalPosts]: [Post[], number] = await Promise.all([
    client.fetch(QUERY, { start, end },{next:{tags:['posts']}}),
    client.fetch(TOTAL_QUERY,{},{next:{tags:['posts']}}),
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#FDFCF8] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="relative mb-24 text-center">
          <span className="text-retro-orange uppercase tracking-[0.4em] text-xs font-bold mb-4 mt-4 block">
            Historie zapisane światłem
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-retro-black italic relative z-10">
            Opowieści <span className="font-sans not-italic font-light text-zinc-300">/</span> Fotografa
          </h1>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[12vw] font-bold text-zinc-100/50 select-none -z-0">
            JOURNAL
          </div>
          <p className="mt-8 text-zinc-500 max-w-md mx-auto font-light leading-relaxed">
            Kulisy sesji, porady jak przygotować się do zdjęć i garść inspiracji prosto z {COMPANY_NAME}.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-12">
          {posts.map((post, index) => {
            const isFeatured = currentPage === 1 && index === 0;
            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className={`group flex flex-col ${
                  isFeatured ? "md:col-span-12 lg:flex-row gap-6 mb-12" : "md:col-span-6 lg:col-span-4"
                }`}
              >
                <div className={`relative overflow-hidden bg-zinc-100 ${
                  isFeatured ? "lg:w-2/3 aspect-[16/9]" : "aspect-[4/5]"
                }`}>
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className={`${isFeatured ? "lg:w-1/3 flex flex-col justify-center" : "pt-6"}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="h-[1px] w-8 bg-retro-orange transition-all duration-500 group-hover:w-12"></span>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest">
                    {post.publishedAt 
                      ? new Date(post.publishedAt).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
                      : "Data nieznana"}
                  </p>
                  </div>
                  <h2 className={`${isFeatured ? "text-4xl" : "text-xl"} font-serif text-retro-black mb-4 group-hover:text-retro-orange transition-colors`}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-zinc-500 font-light leading-relaxed line-clamp-3 text-sm">
                      {post.excerpt}...
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* --- PAGINACJA --- */}
        {totalPages > 1 && (
          <div className="mt-24 flex justify-center items-center gap-8 border-t border-zinc-200 pt-12">
            {currentPage > 1 && (
              <Link 
                href={`/blog?page=${currentPage - 1}`}
                className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-retro-orange transition-colors"
              >
                <ChevronLeftCircle className="w-5 h-5 text-retro-black" /> Poprzednia
              </Link>
            )}

            <div className="flex gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`text-sm ${
                    currentPage === pageNum 
                    ? "font-bold border-b-2 border-retro-orange" 
                    : "text-zinc-400 hover:text-retro-black"
                  }`}
                >
                  {pageNum}
                </Link>
              ))}
            </div>

            {currentPage < totalPages && (
              <Link 
                href={`/blog?page=${currentPage + 1}`}
                className="flex items-center gap-2 text-xs  uppercase tracking-widest hover:text-retro-orange transition-colors"
              >
                Następna <ChevronRightCircle className="w-5 h-5 text-retro-black" />
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}