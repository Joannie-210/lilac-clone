"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function Home() {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/lilac-image-3.webp",
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/lilac-image-4.webp",
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/lilac-image-5.webp",
    },
  ];

  const faqs = [
  {
    question: "Do you take insurance?",
    answer: "Yes, I am an in-network provider for several major plans. Please contact me to verify your specific coverage."
  },
  {
    question: "What are your rates?",
    answer: "My standard rate is $150 per session. I also offer a sliding scale for those in need of financial assistance."
  },
  {
    question: "Do you have any openings?",
    answer: "I currently have limited availability for new clients. Please reach out to schedule an initial consultation."
  }
];

const backgroundItems = [
    { 
      title: "Education", 
      content: "Master of Science in Clinical Psychology from [University Name], specializing in cognitive behavioral therapy." 
    },
    { 
      title: "Licensure", 
      content: "Licensed Professional Counselor (LPC) in the state of [State], License #123456789." 
    },
    { 
      title: "Certifications", 
      content: "Certified Clinical Trauma Professional (CCTP) and Mindfulness-Based Stress Reduction (MBSR) Practitioner." 
    }
  ];

const [openIndex, setOpenIndex] = useState<number | null>(null);
const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      {/* Horizontal Line - Remains Stationary */}
      <span className="absolute h-[1.5px] w-full bg-[#2D472C] rounded-full" />
      
      {/* Vertical Line - Rotates 90 degrees to the left */}
      <span 
        className={`absolute h-full w-[1.5px] bg-[#2D472C] rounded-full transition-all duration-500 ease-in-out ${
          isOpen 
            ? "-rotate-90 opacity-0 scale-y-0" 
            : "rotate-0 opacity-100 scale-y-100"
        }`} 
      />
    </div>
  );
};

const [openSecondIndex, setOpenSecondIndex] = useState<number | null>(null);
const PlusMinusIconTwo = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      {/* Horizontal Line - Remains Stationary */}
      <span className="absolute h-[1.5px] w-full bg-[#2D472C] rounded-full" />
      
      {/* Vertical Line - Rotates 90 degrees to the left */}
      <span 
        className={`absolute h-full w-[1.5px] bg-[#2D472C] rounded-full transition-all duration-500 ease-in-out ${
          isOpen 
            ? "-rotate-90 opacity-0 scale-y-0" 
            : "rotate-0 opacity-100 scale-y-100"
        }`} 
      />
    </div>
  );
};

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
     <Navbar />

      {/* HERO SECTION */}
      <section className="bg-brand-forest flex h-220 md:h-200  pt-10 w-full">
      <div className=" w-full md:gap-15 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 ">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:w-130">
          <div className="relative w-[280px] sm:w-[360px] md:w-[450px] aspect-[3/4] overflow-hidden rounded-t-[200px]">
            <Image
              src="/lilac-image-8.webp"   // replace with your image
              alt="Lilac bouquet"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="-mt-20 lg:pl-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-[#243a1f] font-serif text-4xl  sm:text-5xl md:text-6xl lg:text-6xl leading-tight tracking-tight">
            Live your life
            <br />
            in full bloom
          </h1>

          <p className="mt-6 text-[#243a1f]/80 text-base md:text-lg">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="mt-8 lg:ml-10 px-8 py-3 border border-[#243a1f] text-[#243a1f] text-sm tracking-wide uppercase hover:bg-[#243a1f] hover:text-white transition-all duration-300">
            Connect With Me →
          </button>
        </div>
      </div>
    </section>

      {/* SPECIALTIES GRID */}
      <section className="bg-[#fbf6ef] py-24 px-6 md:px-12">
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#243a1f] mb-20">
          My Specialties
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="border border-[#243a1f]/20 bg-[#e9e5dc] p-10 flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-[#243a1f] mb-6">
                {item.title}
              </h3>
              <p className="text-[#243a1f] mb-12 text-left leading-relaxed">
                {item.description}
              </p>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto">
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
<section className="flex flex-col md:flex-row min-h-[600px] w-full overflow-hidden">
      
      {/* Left Column: Full-height Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
        <Image
        fill
          src="/lilac-image-2.webp" 
          alt="Woman resting head back with eyes closed"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Column: Content Area */}
      <div className="w-full md:w-1/2 bg-[#C3C1CC] flex flex-col">
        {/* Text Container */}
        <div className="flex-grow p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2 className="text-[#2D472C] text-4xl md:text-5xl font-semibold leading-tight mb-8">
            You don’t have to do this
            all alone.
          </h2>

          <p className="text-[#2D472C] text-lg mb-8 font-medium">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="space-y-4 text-[#2D472C] text-md md:text-lg mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#2D472C] shrink-0" />
              Persistent feelings of sadness or hopelessness
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#2D472C] shrink-0" />
              Trouble focusing or making decisions
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#2D472C] shrink-0" />
              Difficulty maintaining relationships
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#2D472C] shrink-0" />
              Feeling constantly exhausted or unmotivated
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#2D472C] shrink-0" />
              A pervasive sense of being overwhelmed
            </li>
          </ul>

          <p className="text-[#2D472C] text-lg leading-relaxed max-w-lg">
            With empathy and guidance, we’ll work together to navigate the 
            challenges life throws your way.
          </p>
        </div>

        {/* Footer Link / Border Section */}
        <div className="border-t  border-[#2D472C] p-6 flex justify-center">
          <a 
            href="#work-with-me" 
            className="text-[#2D472C] text-xs uppercase tracking-[0.2em] font-bold hover:opacity-70 transition-opacity flex items-center"
          >
            Work with me <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>

    </section>
      {/* BIO SECTION (Lilac) */}
      <section className="bg-[#EBE7E0] min-h-175 flex items-center px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-serif text-[#2D472C] font-semibold">
              Hi, I'm Lilac.
            </h2>
            <p className="text-[#2D472C] text-lg md:text-xl leading-relaxed max-w-lg">
              I'm committed to providing a safe and supportive environment where we can 
              explore your thoughts, feelings, and behaviors. With empathy and guidance, 
              we'll work together to navigate the challenges life throws your way.
            </p>
            <button className="group flex items-center gap-4 border border-[#2D472C] px-10 py-4 text-xs tracking-widest uppercase text-[#2D472C] font-bold hover:bg-[#2D472C] hover:text-white transition-all duration-300">
              Let's Chat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Main Arched Image */}
            <div className="relative w-75 h-112.5 md:w-112.5 md:h-162.5 overflow-hidden rounded-t-full shadow-md">
              <Image 
                src="/lilac-image-1.webp" 
                alt="Person holding lilacs"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping Circle */}
            <div className="absolute -bottom-10 right-0 md:-right-10 w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
              <Image 
                src="/lilac-image-6.webp" 
                alt="Close up detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
     <section className="bg-[#FAF7F2] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Arched Image */}
       <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[200px] shadow-sm">
    <Image
      src="/lilac-image-7.webp"
      alt="Decorative dried flowers"
      fill
      sizes="(max-width: 640px) 100vw, 420px"
      className="object-cover"
      priority
    />
  </div>
</div>


        {/* Right Side: FAQ Content */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2D472C] mb-12">
            FAQs
          </h2>

          <div className="border-t border-[#2D472C]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-[#2D472C]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-8 flex items-center text-left"
                  >
                    {/* The Smooth Transition Icon */}
                    <div className="mr-6">
                      <PlusMinusIcon isOpen={isOpen} />
                    </div>
                    
                    <span className="text-xl md:text-2xl font-medium text-[#2D472C]">
                      {faq.question}
                    </span>
                  </button>
                  
                  {/* Smooth height transition for the answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pl-11 text-[#2D472C]/80 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#EBE7E0] py-10 h-auto px-6">
      <div className="max-w-xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-serif text-[#2D472C] font-semibold text-center mb-8">
          My Professional Background
        </h2>

        {/* Accordion List */}
        <div className="border-t border-[#2D472C]">
          {backgroundItems.map((item, index) => {
            const isOpen = openSecondIndex === index;
            return (
              <div key={index} className="border-b-2 border-[#2D472C]">
                <button
                  onClick={() => setOpenSecondIndex(isOpen ? null : index)}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl font-medium text-[#2D472C] tracking-tight">
                    {item.title}
                  </span>
                  
                  {/* Icon placed on the right per reference image */}
                  <PlusMinusIconTwo isOpen={isOpen} />
                </button>
                
                {/* Expandable Content Area */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#2D472C]/80 text-lg leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="bg-[#848650] py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white">Get started today.</h2>
          <div className="text-white/90 text-lg md:text-xl space-y-2">
            <p>Ready to take the first step towards a happier, healthier you?</p>
            <p>Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
          </div>
          <div className="pt-8">
            <button className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-[#848650] transition-all duration-300">
              Get in Touch &rarr;
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#f5f2e9] text-[#2d3e1d] pt-16  font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Information Grid */}
        <div className="grid md:px-20  grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Brand & Address */}
          <div>
            <h2 className="text-4xl font-normal mb-6">Lilac Template</h2>
            <div className="space-y-1 text-lg">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
              <div className="pt-4">
                <a href="mailto:email@example.com" className="underline block">email@example.com</a>
                <a href="tel:5555555555" className="underline block">(555) 555-5555</a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-3xl font-normal mb-6">Hours</h3>
            <div className="text-lg">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:text-right">
            <h3 className="text-3xl font-normal mb-6">Find</h3>
            <nav className="flex flex-col space-y-2 text-lg items-start md:items-end">
              <Link href="/" className="underline decoration-1 underline-offset-4">Home</Link>
              <Link href="/contact" className="underline decoration-1 underline-offset-4">Contact</Link>
              <Link href="/blog" className="underline decoration-1 underline-offset-4">Blog</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="border-t bg-[#EBE7E0] border-[rgb(220,217,206)] py-8 w-full text-center text-sm space-y-4">
          <div className="flex flex-wrap mb-1 justify-center gap-x-2 gap-y-2">
            <Link href="/privacy" className="underline">Privacy & Cookies Policy</Link>
            <Link href="/estimate" className="underline">Good Faith Estimate</Link>
            <Link href="/terms" className="underline">Website Terms & Conditions</Link>
            <Link href="/disclaimer" className="underline">Disclaimer</Link>
          </div>
          
          <p className="pt-4 mb-5.5">
            Website Template Credits: <a href="#" className="underline">Go Bloom Creative</a>
          </p>
          
          <p className="pt-8">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}