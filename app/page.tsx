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
        className={`absolute h-full w-[1.5px] bg-[#2D472C] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
        className={`absolute h-full w-[1.5px] bg-[#2D472C] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
      <section className="px-6 md:px-10 py-12 md:py-20 flex w-full bg-[#FDF2F2] items-center justify-center font-sans">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl w-full">
          <div className="relative w-full max-w-[450px] aspect-[3/4]">
            <Image
              src="/lilac-image-1.webp"
              alt="Lilac Template"
              fill
              className="rounded-t-full object-cover shadow-lg"
              priority
            />
          </div>
          <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-serif text-[#243a1f]">
              Live your life in <span className="italic">full bloom</span>
            </h1>
          </div>
        </div>
      </section>

      {/* SPLIT CONTENT SECTION */}
      <section className="min-h-[80vh] bg-[#ebe7df] flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 px-8 py-16 md:px-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#243a1f] mb-8">
            Live a fulfilling life.
          </h2>
          <p className="text-[#243a1f] text-lg mb-6 max-w-xl leading-relaxed">
            Life can be challenging—especially when you're trying to balance your
            personal and professional life.
          </p>
          <p className="text-[#243a1f] text-lg mb-10 max-w-xl leading-relaxed">
            It's easy to feel like you're alone in facing these challenges, but I
            want you to know that I'm here to help.
          </p>
          <button className="group flex items-center gap-3 text-[#243a1f] font-bold border-t-2 border-[#243a1f] pt-4 w-fit tracking-tighter">
            GET IN TOUCH
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="hidden lg:block w-1/2 relative min-h-[500px]">
          <Image
            src="/lilac-image-2.webp"
            alt="Lifestyle flatlay"
            fill
            className="object-cover"
          />
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

      {/* BIO SECTION (Lilac) */}
      <section className="bg-[#EBE7E0] min-h-[700px] flex items-center px-6 py-20 md:px-12 lg:px-24">
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
            <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[650px] overflow-hidden rounded-t-full shadow-md">
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
        <div className="relative w-100 h-145 max-w-[500px] mx-auto lg:mx-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-full shadow-sm">
            <Image
              src="/lilac-image-7.webp" 
              alt="Decorative dried flowers"
              fill
              className="object-cover"
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
      <Footer />
    </div>
  );
}