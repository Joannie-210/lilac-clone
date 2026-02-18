"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

/*
  COLOR PALETTE — Soft Lilac + Faded Sage Green + Plum Accent
  -------------------------------------------------------------
  Soft Lilac (light):     #EDE8F5
  Soft Lilac (mid):       #D9D0EE
  Soft Lilac (deep):      #BFB2E0
  Soft Lilac (muted bg):  #F5F2FB

  Faded Sage (light):     #E4EDE4
  Faded Sage (mid):       #CCDACC
  Faded Sage (deep):      #A8BFA8
  Faded Sage (muted bg):  #F2F6F2

  Accent (Plum):          #6B3F7A
  Accent (dark):          #4E2B5A

  Text (dark):            #2E2535
  Text (medium):          #4A5A4A
  Text (light):           #6E7E6E
*/

export default function Home() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "Whether it's constant worry, racing thoughts, or panic attacks, we'll work together to understand what's driving your anxiety and build lasting relief.",
      image: "/lilac-image-3.webp",
    },
    {
      title: "Trauma & EMDR",
      description: "I work with single-incident trauma and complex, long-standing patterns using carefully paced, evidence-based approaches including EMDR.",
      image: "/lilac-image-4.webp",
    },
    {
      title: "Burnout & Perfectionism",
      description: "For high-achieving professionals and creatives who feel disconnected after years of pushing through stress—therapy as a space to slow down and reconnect.",
      image: "/lilac-image-5.webp",
    },
  ];

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance for potential reimbursement. Please contact me to discuss your options."
    },
    {
      question: "What are your rates?",
      answer: "Please reach out directly for current session fees. I'm happy to discuss rates and answer any questions during our initial consultation."
    },
    {
      question: "Do you offer telehealth?",
      answer: "Yes. I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California."
    }
  ];

  const backgroundItems = [
    { 
      title: "Education", 
      content: "Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in trauma-focused and evidence-based therapeutic modalities." 
    },
    { 
      title: "Licensure", 
      content: "Licensed Clinical Psychologist in the state of California. All sessions are conducted in accordance with California Board of Psychology standards." 
    },
    { 
      title: "Certifications", 
      content: "Trained in Eye Movement Desensitization and Reprocessing (EMDR), Cognitive Behavioral Therapy (CBT), and Mindfulness-Based Stress Reduction (MBSR)." 
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div className="relative w-5 h-5 flex items-center justify-center">
        <span className="absolute h-[1.5px] w-full bg-[#2E2535] rounded-full" />
        <span 
          className={`absolute h-full w-[1.5px] bg-[#2E2535] rounded-full transition-all duration-500 ease-in-out ${
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
        <span className="absolute h-[1.5px] w-full bg-[#2E2535] rounded-full" />
        <span 
          className={`absolute h-full w-[1.5px] bg-[#2E2535] rounded-full transition-all duration-500 ease-in-out ${
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

      {/* HERO SECTION — Soft Lilac light (unchanged) */}
      <section className="bg-[#EDE8F5] flex h-220 md:h-250 lg:h-180 pt-10 w-full">
        <div className="w-full md:gap-15 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6">
          
          {/* LEFT IMAGE */}
         <div className="flex justify-center lg:w-130">
  <div className="relative w-[280px] sm:w-[360px] md:w-[435px] aspect-[3/4] overflow-hidden rounded-t-[200px]">
    <Image
      src="/calm.jfif"
      alt="A picture of lady sitting on a bench"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>
</div>
          {/* RIGHT CONTENT */}
          <div className="md:-mt-20 lg:mt-10 lg:-ml-5 text-center lg:text-left">
            <h1 className="text-[#6B3F7A] font-brico text-4xl  md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
              Find calm
              <br />
              within yourself
            </h1>
            <p className="mt-6 text-[#2E2535]/80 text-base md:text-lg">
              Therapy for Adults in Santa Monica, CA.
            </p>
            <button className="mt-8 lg:ml-20 px-7 cursor-pointer py-3 border border-[#6B3F7A] text-[#6B3F7A] text-sm tracking-wide uppercase hover:bg-[#6B3F7A] hover:text-white transition-all duration-300">
              Connect With Me →
            </button>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN SECTION — Faded Sage mid (was Warm Stone mid) */}
      <section className="flex flex-col md:flex-row w-full min-h-[600px] overflow-hidden font-sans">
        
        <div className="w-full md:w-1/2 bg-[#f5fff5] flex flex-col">
          <div className="flex-grow p-10 md:p-20 lg:py-24 lg:px-10 flex flex-col justify-center">
            <h2 className="text-[#154406] text-4xl md:text-5xl lg:text-5xl  leading-tight mb-6">
              Feel more at ease.
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-[#154406] font-lora text-lg md:text-lg leading-relaxed">
                Many of my clients look capable and put-together on the outside—
                while quietly carrying anxiety, exhaustion, or the weight of past experiences.
              </p>
              <p className="text-[#154406]  text-lg md:text-lg leading-relaxed">
                You don't have to keep pushing through alone. 
                I'm here to help you find steadier ground.
              </p>
            </div>
          </div>
          <button className="border-t cursor-pointer hover:text-white hover:bg-[#154406] border-[#2E2535]/10 p-6 flex justify-center">
            <a 
              href="#contact" 
              className="grouptext-white flex font-semibold items-center gap-2 text-sm uppercase tracking-widest  transition-opacity"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </button>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image
            src="/your-image-path.jpg"
            alt="Flat lay with coffee, lilacs, and a notebook"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
      </section>

      {/* SPECIALTIES GRID — Soft Lilac muted bg, Faded Sage cards (unchanged lilac bg, sage cards) */}
      <section className="bg-[#F2F6F2]  py-24 px-6 md:px-12">
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#2E2535] mb-20">
          My Specialties
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="border border-[#A8BFA8]/40 bg-white p-10 flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-[#2E2535] mb-6">
                {item.title}
              </h3>
              <p className="text-[#2E2535] mb-12 text-left leading-relaxed">
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

      {/* HOPE SECTION — Soft Lilac mid (unchanged) */}
      <section className="flex flex-col md:flex-row min-h-[600px] w-full overflow-hidden">
        
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image
            fill
            src="/lilac-image-2.webp" 
            alt="Woman resting head back with eyes closed"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#D9D0EE] flex flex-col">
          <div className="flex-grow p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            <h2 className="text-[#2E2535] text-4xl md:text-5xl font-semibold leading-tight mb-8">
              You don't have to do this
              all alone.
            </h2>
            <p className="text-[#2E2535] text-lg mb-8 font-medium">
              If you are facing any of these, there's hope:
            </p>
            <ul className="space-y-4 text-[#2E2535] text-md md:text-lg mb-10">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#6B3F7A] shrink-0" />
                Persistent anxiety, worry, or a sense of dread
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#6B3F7A] shrink-0" />
                Panic attacks or chronic physical tension
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#6B3F7A] shrink-0" />
                Difficulty sleeping or always bracing for something to go wrong
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#6B3F7A] shrink-0" />
                Lingering effects of past trauma or difficult experiences
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[#6B3F7A] shrink-0" />
                Burnout, perfectionism, or feeling disconnected from yourself
              </li>
            </ul>
            <p className="text-[#2E2535] text-lg leading-relaxed max-w-lg">
              With empathy and evidence-based tools, we'll work together at a pace 
              that feels safe and sustainable for you.
            </p>
          </div>
          <div className="border-t border-[#2E2535]/20 p-6 flex justify-center">
            <a 
              href="#work-with-me" 
              className="text-[#2E2535] text-xs uppercase tracking-[0.2em] font-bold hover:opacity-70 transition-opacity flex items-center"
            >
              Work with me <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>

      </section>

      {/* BIO SECTION — Faded Sage light (was Warm Stone light) */}
      <section className="bg-[#f5fff5] min-h-175 flex items-center px-6 py-20 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-serif text-[#6B3F7A] font-semibold">
              Hi, I'm Dr. Maya.
            </h2>
            <p className="text-[#2E2535] text-lg md:text-xl leading-relaxed max-w-lg">
              I'm a licensed clinical psychologist based in Santa Monica, CA. I specialize in 
              anxiety, trauma, and burnout—helping thoughtful, high-achieving adults find relief, 
              develop insight, and build a stronger relationship with themselves over time.
            </p>
            <button className="group flex items-center gap-4 border border-[#6B3F7A] px-10 py-4 text-xs tracking-widest uppercase text-[#6B3F7A] font-bold hover:bg-[#6B3F7A] hover:text-white transition-all duration-300">
              Let's Chat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-75 h-112.5 md:w-112.5 md:h-162.5 overflow-hidden rounded-t-full shadow-md">
              <Image 
                src="/lilac-image-1.webp" 
                alt="Person holding lilacs"
                fill
                className="object-cover"
              />
            </div>
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

      {/* OFFICE SECTION — Soft Lilac light (unchanged) */}
      <section className="bg-[#EDE8F5] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-[#2E2535] mb-4">
              Our Office
            </h2>
            <p className="text-[#4A5A4A] leading-relaxed">
              Dr. Maya Reynolds' Santa Monica practice is designed to feel calm, grounded, and
              welcoming—a quiet, private space with natural light and a comfortable, uncluttered
              environment where you can slow down and focus fully on your healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/lilac-image-1.webp"
                  alt="Therapy office interior with warm lighting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/lilac-image-1.webp"
                  alt="Comfortable counseling space with seating"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 col-span-2 rounded-2xl overflow-hidden">
                <Image
                  src="/lilac-image-1.webp"
                  alt="Private therapy room designed for comfort and safety"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-[#4A5A4A] space-y-6 leading-relaxed">
              <p>
                The office offers a thoughtfully arranged environment that prioritizes comfort, 
                privacy, and emotional safety. Soft lighting, natural textures, and comfortable 
                seating create a setting that feels both professional and personal. Clients 
                often share that the space itself helps them feel more at ease when they arrive.
              </p>
              <p>
                Sessions are available in person from the Santa Monica office, with secure 
                telehealth options for clients located anywhere in California. Whether you're 
                new to therapy or continuing ongoing work, the space is designed to support 
                openness, reflection, and trust.
              </p>
              <p className="text-sm text-[#6E7E6E]">
                Located at 123th Street 45 W, Santa Monica, CA 90401—a discreet, 
                easily accessible setting to ensure confidentiality and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION — Faded Sage muted bg (was Warm Stone muted bg) */}
      <section className="bg-[#F2F6F2] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
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

          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#2E2535] mb-12">
              FAQs
            </h2>

            <div className="border-t border-[#A8BFA8]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-[#A8BFA8]">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-8 flex items-center text-left"
                    >
                      <div className="mr-6">
                        <PlusMinusIcon isOpen={isOpen} />
                      </div>
                      <span className="text-xl md:text-2xl font-medium text-[#2E2535]">
                        {faq.question}
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="pl-11 text-[#2E2535]/80 text-lg leading-relaxed">
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

      {/* PROFESSIONAL BACKGROUND — Faded Sage light (was Warm Stone light) */}
      <section className="bg-[#E4EDE4] py-10 h-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-serif text-[#2E2535] font-semibold text-center mb-8">
            My Professional Background
          </h2>

          <div className="border-t border-[#A8BFA8]">
            {backgroundItems.map((item, index) => {
              const isOpen = openSecondIndex === index;
              return (
                <div key={index} className="border-b-2 border-[#A8BFA8]">
                  <button
                    onClick={() => setOpenSecondIndex(isOpen ? null : index)}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <span className="text-xl md:text-2xl font-medium text-[#2E2535] tracking-tight">
                      {item.title}
                    </span>
                    <PlusMinusIconTwo isOpen={isOpen} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#2E2535]/80 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER — Plum accent (unchanged) */}
      <section className="bg-[#6B3F7A] py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white">Get started today.</h2>
          <div className="text-white/90 text-lg md:text-xl space-y-2">
            <p>Ready to take the first step toward feeling more like yourself?</p>
            <p>Reach out to schedule a consultation. I look forward to hearing from you and exploring whether we'd be a good fit.</p>
          </div>
          <div className="pt-8">
            <button className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-[#6B3F7A] transition-all duration-300">
              Get in Touch &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER — Faded Sage muted bg (was Warm Stone muted bg) */}
      <footer className="w-full bg-[#F2F6F2] text-[#2E2535] pt-16 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:px-20 grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            
            <div>
              <h2 className="text-4xl font-normal mb-6">Dr. Maya Reynolds</h2>
              <div className="space-y-1 text-lg">
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
                <div className="pt-4">
                  <a href="mailto:email@example.com" className="underline block">email@example.com</a>
                  <a href="tel:5555555555" className="underline block">(555) 555-5555</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-normal mb-6">Hours</h3>
              <div className="text-lg">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            <div className="md:text-right">
              <h3 className="text-3xl font-normal mb-6">Find</h3>
              <nav className="flex flex-col space-y-2 text-lg items-start md:items-end">
                <Link href="/" className="underline decoration-1 underline-offset-4">Home</Link>
                <Link href="/contact" className="underline decoration-1 underline-offset-4">Contact</Link>
                <Link href="/blog" className="underline decoration-1 underline-offset-4">Blog</Link>
              </nav>
            </div>
          </div>

          {/* Footer bottom — Soft Lilac light (unchanged) */}
          <div className="border-t bg-[#EDE8F5] border-[#D9D0EE] py-8 w-full text-center text-sm space-y-4">
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
              All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}