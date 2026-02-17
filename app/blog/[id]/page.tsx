"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const BLOG_DATA = [
  { id: "1", title: "Blog Post One", date: "March 11", content: "It all begins with an idea..." },
  { id: "2", title: "Blog Post Two", date: "March 11", content: "The journey continues here..." },
  { id: "3", title: "Blog Post Three", date: "March 11", content: "" },
  { id: "4", title: "Blog Post Four", date: "March 11", content: "The final reflection..." },
];

export default function BlogPostPage() {
  const params = useParams();
  
  // 1. Logic to track the current index
  const initialIndex = BLOG_DATA.findIndex(p => p.id === params.id);
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  const currentPost = BLOG_DATA[currentIndex];

  // 2. Navigation Handlers
  const goToPost = (index: number) => {
    setCurrentIndex(index);
    window.history.pushState(null, "", `/blog/${BLOG_DATA[index].id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  
  <>
   <nav className="px-6 md:px-10 flex w-full bg-[#E5E0D8] items-center justify-between font-sans h-20">
           <Link href="/" className="text-xl md:text-2xl font-bold text-[#243a1f] cursor-pointer">
           
               Lilac template
     
           </Link>
           
           <div className="flex items-center gap-6 md:gap-10 text-[#243a1f] font-medium">
             <Link 
               href="/blog" 
               className="cursor-pointer hover:opacity-70 transition-opacity"
             >
               Blog
             </Link>
             
             <Link 
               href="/contact" 
               className="cursor-pointer hover:opacity-70 transition-opacity"
             >
               Contact
             </Link>
           </div>
         </nav>
    <main className="min-h-screen bg-[#E5E0D8] text-[#1D3319] px-6 pt-10 pb-20 flex flex-col items-center">
      <div className="max-w-4xl w-full flex-grow">
        <p className="text-center text-[12px] md:text-[12px] font-medium mb-4">{currentPost.date}</p>
        <h1 className="text-5xl md:text-6xl font-medium text-center mb-16 tracking-tight">
          {currentPost.title}
        </h1>

        <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed">
          <p>{currentPost.content}</p>
        </div>
      </div>

      {/* 3. Dynamic Footer Navigation */}
      <div className="max-w-6xl w-full mt-32 border-t border-[#1D3319]/10 pt-8 flex justify-between items-center">
        
        {/* Left Side: Show if NOT the first post */}
        <div>
          {currentIndex > 0 && (
            <button 
              onClick={() => goToPost(currentIndex - 1)}
              className="group flex items-center gap-4 text-2xl md:text-3xl font-medium hover:opacity-70 transition-opacity"
            >
              <span className="font-light transition-transform group-hover:-translate-x-2">&lt;</span>
              {BLOG_DATA[currentIndex - 1].title}
            </button>
          )}
        </div>

        {/* Right Side: Show if NOT the last post */}
        <div>
          {currentIndex < BLOG_DATA.length - 1 && (
            <button 
              onClick={() => goToPost(currentIndex + 1)}
              className="group flex items-center gap-4 text-2xl md:text-3xl font-medium hover:opacity-70 transition-opacity text-right"
            >
              {BLOG_DATA[currentIndex + 1].title}
              <span className="font-light transition-transform group-hover:translate-x-2">&gt;</span>
            </button>
          )}
        </div>

      </div>
    </main>
    </> 
);
}