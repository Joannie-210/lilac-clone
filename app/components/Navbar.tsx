"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`bg-white  fixed top-0 left-0 w-full px-6 lg:px-10 flex items-center justify-between font-sans h-15 z-50 transition-transform duration-300  backdrop-blur-md ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* MOBILE (≤900px) */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Hamburger Left */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-1"
          >
            <span className="w-6 h-[2px] bg-[#243a1f]"></span>
            <span className="w-6 h-[2px] bg-[#243a1f]"></span>
          </button>

          {/* Title Right */}
          <Link
            href="/"
            className="text-xl font-bold text-[#243a1f]"
          >
            Lilac template
          </Link>
        </div>

        {/* DESKTOP (>900px) */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-2xl font-bold text-[#243a1f]"
          >
            Lilac template
          </Link>

          <div className="flex items-center gap-10 text-[#243a1f] font-medium">
            <Link
              href="/blog"
              className={`pb-1 border-b-2 transition-all ${
                isActive("/blog")
                  ? "border-[#243a1f]"
                  : "border-transparent hover:opacity-70"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`pb-1 border-b-2 transition-all ${
                isActive("/contact")
                  ? "border-[#243a1f]"
                  : "border-transparent hover:opacity-70"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#FDF8F3] shadow-md lg:hidden flex flex-col items-center py-6 gap-6 z-40">
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-[#243a1f] text-lg"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-[#243a1f] text-lg"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
