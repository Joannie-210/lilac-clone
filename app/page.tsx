import { gopher } from "./fonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="px-10 flex w-full bg-[#FDF2F2] items-center justify-between font-sans h-15">
  <div className="flex items-center justify-between w-full">
   <h1 className="font-gopher">Lilac template</h1>
   <div className="ml-4 flex items-center justify-center gap-10
   6">
<p>Blog</p>
<p>Contact</p>
    </div>
   </div>

    </nav>
    <div className="px-10 flex w-full bg-[#FDF2F2] items-center justify-center font-sans h-full">
<div className="flex items-center justify-center gap-50 w-full">

<Image
  src="/lilac-image-1.webp"
  alt="Lilac Template"
  width={400}
  height={80}
  className="rounded-t-full w-120 object-cover shadow-lg h-180 "
/>

<div className="ml-10 bg-red-500 w-100 text-center h-full flex flex-col items-center justify-center gap-5">
<h1 className="text-[60px]">Live your life in full bloom</h1>

</div>
  </div>
    </div>
    <section className="min-h-screen bg-[#ebe7df] flex items-stretch">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 px-8 md:px-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#243a1f] mb-6">
          Live a fulfilling life.
        </h1>

        <p className="text-[#243a1f] text-lg mb-6 max-w-xl">
          Life can be challenging—especially when you're trying to balance your
          personal and professional life.
        </p>

        <p className="text-[#243a1f] text-lg mb-10 max-w-xl">
          It's easy to feel like you're alone in facing these challenges, but I
          want you to know that I'm here to help.
        </p>

        <button className="group flex items-center gap-2 text-[#243a1f] font-medium border-t border-[#243a1f] pt-4 w-fit">
          GET IN TOUCH
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/lilac-image-2.webp"
          alt="Lifestyle flatlay"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
    </>
  );
}
