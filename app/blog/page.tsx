"use client";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Blog() {
  
    const POSTS = [
  { id: "1", title: "The Art of Healing", date: "3/11/19", image: "/healing.jpg" },
  { id: "2", title: "Heart & Home", date: "3/11/19",  image: "/home.jpg" },
  { id: "3", title: "Wholeness", date: "3/11/19",  image: "/wholeness.jpg" },
  { id: "4", title: "Morning Rituals", date: "3/11/19", image: "/morning.jpg" },
];

 const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down - Hide
        setIsVisible(false);
      } else {
        // Scrolling Up - Show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
    <nav
        className={`fixed top-0 left-0 w-full px-6 md:px-12 flex items-center justify-between font-sans h-24 z-50 transition-transform duration-500 bg-brand-canvas/90 backdrop-blur-sm ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Left Side: Minimal Two-Line Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 w-8 group cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className="h-[1.5px] w-full bg-brand-forest transition-all group-hover:w-3/4"></span>
          <span className="h-[1.5px] w-full bg-brand-forest transition-all"></span>
        </button>

        {/* Right Side: Title */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-normal text-brand-forest tracking-tight"
        >
          Lilac Template
        </Link>
      </nav>

      {/* Basic Mobile/Overlay Menu (Shown when hamburger is clicked) */}
      <div className={`fixed inset-0 bg-brand-canvas z-[60] transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 left-6 text-brand-forest uppercase tracking-widest text-sm"
        >
          Close [×]
        </button>
        
        <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-4xl text-brand-forest">Blog</Link>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-4xl text-brand-forest">Contact</Link>
      </div>
    <section className="min-h-screen lg:pt-25 flex items-center justify-center px-9 py-8">
      <div className="max-w-6xl  md:gap-5 w-full grid grid-cols-1 md:grid-cols-2  items-center">
        
        {/* Left Side: Arched Image Container */}
        <div className="relative flex md:pl-0  max-w-3xl justify-center md:justify-center">
          <div className="relative w-full md:w-300px   max-w-105 h-150 overflow-hidden rounded-t-full">
            <Image
              src="/lilac-image-1.webp" // Replace with your image max-w-lg
              alt="Person reading a book"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-[#1D3319] space-y-6 lg:-ml-2 lg:-mt-12.5  ">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl tracking-tight">
            The Lilac Blog
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90">
              My tiny corner of the internet where I talk about all things 
              healing, heart, and wholeness.
            </p>
            
            <p className="text-lg md:text-xl font-bold">
              Glad you&apos;re here.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section className="min-h-screen bg-[#FDF8F3] lg:pb-25 px-2 md:p-12">
     <div className="mx-auto grid grid-cols-1 gap-40 md:gap-20 md:grid-cols-2 lg:gap-30 items-start">
  {POSTS.map((post) => (
    <div key={post.id} className="group flex flex-col">
      <Link href={`/blog/${post.id}`}>
        {/* 1. Removed aspect-square. Added h-auto. */}
        <div className="relative w-full h-90 overflow-hidden bg-gray-200 cursor-pointer">
          <Image 
            src={post.image} 
            alt={post.title} 
            
            width={800} 
            height={600}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      </Link>

      <p className="text-sm text-[#1D3319] my-2">{post.date}</p>
      <h3 className="text-2xl font-bold text-[#1D3319] mb-2">{post.title}</h3>
      
      <Link 
        href={`/blog/${post.id}`}
        className="w-fit text-sm font-bold mt-2 mb-10 md:mt-10 lg:mb-2 uppercase tracking-widest text-[#1D3319] border-b-2 border-[#1D3319] pb-1 hover:opacity-60 transition-opacity"
      >
        Read More
      </Link>
    </div>
  ))}
</div>
    </section>
      <section className="bg-[#7A7B44] px-6 py-14 flex justify-center items-center">
      {/* Outer Border Box */}
      <div className="border border-white/70 w-full max-w-4xl py-15 px-4 md:px-5 flex flex-col items-center text-center text-white">
        
        <h2 className="text-3xl md:text-4xl  mb-4">Subscribe</h2>
        <p className="text-lg mb-10 opacity-90">
          Sign up with your email address to receive news and updates.
        </p>

        {/* Responsive Form Layout */}
        <form className="w-full max-w-sm flex flex-col md:flex-row gap-3 mb-8">
          <input
            type="email"
            placeholder="Email Address"
            className="grow p-4 bg-white text-gray-800 outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            className="border cursor-pointer border-white/80 text-gray-300 hover:bg-white/20 px-4 py-4 uppercase tracking-widest text-xs  transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm opacity-80">We respect your privacy.</p>
      </div>
    </section>
   <Footer />
    
    </>
  );
}