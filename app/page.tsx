import { gopher } from "./fonts";
import Image from "next/image";

export default function Home() {
  const specialties = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/lilac-image-3.webp",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/lilac-image-4.webp",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/lilac-image-5.webp",
  },
];
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
    <section className="bg-[#fbf6ef] py-20 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#243a1f] mb-16">
        My Specialties
      </h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="border border-[#243a1f] bg-[#e9e5dc] p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-[#243a1f] mb-4 self-start">
              {item.title}
            </h3>

            <p className="text-[#243a1f] mb-10 text-left">
              {item.description}
            </p>

            <div className="relative w-64 h-64 rounded-full overflow-hidden mt-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
