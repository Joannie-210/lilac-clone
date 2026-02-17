"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav 
      className={`fixed top-0 left-0 w-full px-6 md:px-10 flex items-center justify-between font-sans h-20 z-50 transition-transform duration-300 bg-[#FDF8F3]/80 backdrop-blur-md ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/" className="text-xl md:text-2xl font-bold text-[#243a1f] cursor-pointer">
        Lilac template
      </Link>
      
      <div className="flex items-center gap-6 md:gap-10 text-[#243a1f] font-medium">
        <Link 
          href="/blog" 
          className={`cursor-pointer hover:opacity-70 transition-all pb-1 border-b-2 ${
            isActive("/blog") ? "border-[#243a1f]" : "border-transparent"
          }`}
        >
          Blog
        </Link>
        
        <Link 
          href="/contact" 
          className={`cursor-pointer hover:opacity-70 transition-all pb-1 border-b-2 ${
            isActive("/contact") ? "border-[#243a1f]" : "border-transparent"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}