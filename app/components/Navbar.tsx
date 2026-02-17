import Link from "next/link";

export default function Navbar() {
    return (
    
  <nav className="px-6 md:px-10 flex w-full bg-transparent items-center justify-between font-sans h-20">
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
    )
}