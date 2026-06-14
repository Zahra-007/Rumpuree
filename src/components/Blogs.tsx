import React from "react";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

export default function Blogs() {
  const posts: BlogPost[] = [
    {
      id: "post-1",
      title: "How Dance Classes Improve Your Mental Health & Focus",
      category: "Wellness",
      date: "June 12, 2026",
      author: "Kru Pim",
      image: "/images/dancestyle/04_k_pop.jpeg",
      excerpt: "Dancing isn't just a physical workout. It boosts memory, releases endorphins, and reduces stress levels dramatically.",
    },
    {
      id: "post-2",
      title: "Salsa vs. Bachata: Which Latin Dance is Right for You?",
      category: "Guide",
      date: "June 08, 2026",
      author: "Carlos",
      image: "/images/dancestyle/32_dancehall.jpeg",
      excerpt: "Unsure whether to start with energetic Salsa or sensual Bachata? We break down the rhythms, steps, and vibes of each.",
    },
    {
      id: "post-3",
      title: "5 Essential Stretches Every Dancer Should Do Daily",
      category: "Training",
      date: "May 28, 2026",
      author: "Kru Kwan",
      image: "/images/dancestyle/35_reggaeton.jpeg",
      excerpt: "Improve your flexibility, protect your joints, and increase your dance range of motion with these core stretches.",
    },
  ];

  return (
    <section id="blogs" className="py-24 bg-[#111118] border-b border-brandYellow/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Latest News
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
            Most Recent Dance Posts
          </h2>
          <div className="h-1 w-20 bg-brandYellow mx-auto rounded-full mb-4"></div>
          <p className="text-white/60 text-base">
            Tips, guides, and updates from the instructors and dance community at rumPUREE.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#1C1C28] rounded-2xl overflow-hidden border border-brandYellow/10 shadow-sm hover:border-brandYellow/30 hover:shadow-yellow-500/5 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Blog Image using Next.js Image component */}
              <div className="relative h-56 overflow-hidden bg-black">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brandYellow text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Details */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-white/40 mb-3 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4.5 h-4.5 text-white/20" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4.5 h-4.5 text-white/20" />
                    <span>By {post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-white mb-3 line-clamp-2 group-hover:text-brandYellow transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3 font-normal">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brandYellow group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
