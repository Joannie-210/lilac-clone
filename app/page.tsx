"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';


export default function Home() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "Whether it's constant worry, or panic attacks, we'll work together to understand what's driving your anxiety and build lasting relief.",
      image: "/anxiety.jfif",
    },
    {
      title: "Trauma & EMDR",
      description: "I work with single-incident trauma and complex, long-standing patterns using carefully paced, evidence-based approaches including EMDR.",
      image: "/trauma.jfif",
    },
    {
      title: "Burnout & Perfectionism",
      description: "For high-achieving professionals who feel detached after years of pushing through stress—therapy as a space to slow down and reconnect.",
      image: "/burnout.jfif",
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

      {/* HERO SECTION */}
       <section className="bg-[#EDE8F5] flex h-220 md:h-240 lg:h-250 w-full">
        <div className="w-full  md:gap-15 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6">
          
        
         <div className="flex justify-center lg:mt-10 lg:w-150">
  <div className="relative w-[280px] mt-10 h-100 sm:w-[360px] lg:h-[880px] md:w-[520px] lg:mt-10 overflow-hidden rounded-t-full">
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
          <div className="md:-mt-20 -lg:mt-25  text-center lg:text-left">
            <h1 className="text-[#6B3F7A] font-brico text-4xl  md:text-5xl lg:text-[75px] leading-tight tracking-tight">
              Find calm
              <br />
              within yourself
            </h1>
            <p className="mt-6 text-[#2E2535]/80 text-base md:text-lg ">
              Therapy for Adults in Santa Monica, CA.
            </p>
            <button className="mt-8 lg:ml-25 px-12 cursor-pointer py-3 border border-[#6B3F7A] text-[#6B3F7A] text-md tracking-wide uppercase hover:bg-[#6B3F7A] hover:text-white transition-all duration-300">
              Connect With Me →
            </button>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN SECTION  */}
      <section className="flex flex-col md:flex-row w-full min-h-[700px] overflow-hidden font-sans">
        
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
          <button className="border-t cursor-pointer hover:text-white hover:bg-[#154406] border-gray-400 p-5 flex justify-center">
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
            src="/ease.jpg"
            alt="Lady smiling while holding a cup of tea"
            fill
            priority
            className="object-cover object-center"
          />
           
        </div>
        
      </section>

      {/* SPECIALTIES GRID  */}
      <section className="bg-[#F2F6F2]  pt-30 pb-20 px-6 md:px-10">
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#2E2535] mb-20">
          My Specialties
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="border-2 border-gray-300 bg-white px-5 pt-5 pb-4 flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-[#2E2535] mb-6">
                {item.title}
              </h3>
              <p className="text-[#2E2535] mb-12 text-left leading-relaxed">
                {item.description}
              </p>
              <div className="relative w-48 h-48 lg:w-70 lg:h-70 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOPE SECTION */}
      <section className="flex flex-col md:flex-row min-h-[600px] w-full overflow-hidden">
        
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image
            fill
            src="/relaxed.jfif" 
            alt="Woman resting head back with eyes closed"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
        </div>

        <div className="w-full md:w-1/2 bg-[#D9D0EE] flex flex-col">
          <div className="flex-grow p-8 md:p-16 lg:pt-40 flex flex-col justify-center">
            <h2 className="text-[#2E2535] text-4xl md:text-5xl leading-tight mb-8">
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
          <div className="border-t border-[#2E2535]/20 hover:bg-[#6B3F7A] text-white hover:text-white p-4 flex justify-center">
            <a 
              href="#work-with-me" 
              className="text-[#2E2535] text-md hover:text-white uppercase tracking-[0.2em] font-semibold hover:opacity-70 transition-opacity flex items-center"
            >
              Let's work together <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>

      </section>

      {/* BIO SECTION*/}
      <section className="bg-[#f5fff5] min-h-175 lg:[1000px] flex items-center px-6 py-20 lg:pt-25 lg:pb-40 md:px-12 lg:px-25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 lg:w-170 order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-serif text-[#6B3F7A] ">
              Hi, I'm Dr. Maya.
            </h2>
            <p className="text-[#2E2535] text-lg md:text-xl leading-relaxed max-w-xl">
              I'm a licensed clinical psychologist based in Santa Monica, CA. I specialize in 
              anxiety, trauma, and burnout—helping thoughtful, high-achieving adults find relief, 
              develop insight, and build a stronger relationship with themselves over time.
            </p>
            <button className="group cursor-pointer mx-auto lg:mt-20 flex items-center gap-4 border border-[#6B3F7A] px-10 py-4 text-sm tracking-widest uppercase text-[#6B3F7A] font-bold hover:bg-[#6B3F7A] hover:text-white transition-all duration-300">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-75 h-112.5 md:w-112.5 md:h-162.5 overflow-hidden rounded-t-full shadow-md">
              <Image 
                src="/MR.png" 
                alt="Person holding lilacs"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-0 md:-right-10 w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
              <Image 
                src="/office1.jpeg" 
                alt="Close up detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section className="bg-[#EDE8F5] py-20 px-6 md:px-12">
  <div className="max-w-6xl mx-auto">

 
    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#BFB2E0] pb-10">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#6B3F7A] mb-3 font-medium">Santa Monica, CA</p>
        <h2 className="text-5xl md:text-6xl font-serif text-[#2E2535] leading-tight">
          Our Office
        </h2>
      </div>
      <p className="text-[#4A5A4A] text-lg leading-relaxed max-w-sm text-base md:text-right">
        A quiet, private space with natural light—designed to help you slow down and feel at ease the moment you arrive.
      </p>
    </div>


    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch mb-12">

  
      <div className="relative lg:col-span-2 min-h-[420px] lg:min-h-0 rounded-2xl overflow-hidden">
        <Image
          src="/office2.jpeg"
          alt="Therapy office interior with warm lighting"
          fill
          className="object-cover"
        />
      </div>

      {/* Right stacked images */}
      <div className="lg:col-span-3 grid grid-rows-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden min-h-[220px]">
          <Image
            src="/office3.jfif"
            alt="Comfortable counseling space with seating"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden min-h-[220px]">
          <Image
            src="/office1.jpeg"
            alt="Private therapy room designed for comfort and safety"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-[#BFB2E0]">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B3F7A] mb-3 font-medium">The Space</p>
        <p className="text-[#4A5A4A] leading-relaxed text-lg">
          Soft lighting, natural textures, and comfortable seating create a setting that feels both professional and personal—a place where you can show up fully.
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B3F7A] mb-3 font-medium">In-Person & Telehealth</p>
      <p className="text-[#4A5A4A] leading-relaxed text-lg">
          Sessions are available in person from the Santa Monica office, with secure telehealth options for clients located anywhere in California.
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B3F7A] mb-3 font-medium">Location</p>
        <p className="text-[#4A5A4A] leading-relaxed text-lg">
          123th Street 45 W, Santa Monica, CA 90401. Discreet and easily accessible, designed with your confidentiality and peace of mind in mind.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* FAQ SECTION*/}
      <section className="bg-[#F2F6F2] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="relative lg:ml-10 w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[200px] shadow-sm">
              <Image
                src="/faqss.jfif"
                alt="Decorative dried flowers"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex lg:w-145 flex-col">
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
                      className="w-full py-3 cursor-pointer flex items-center text-left"
                    >
                      <div className="mr-6">
                        <PlusMinusIcon isOpen={isOpen} />
                      </div>
                      <span className="text-xl md:text-2xl lg:text-[42px] font-medium text-[#2E2535]">
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

      {/* PROFESSIONAL BACKGROUND */}
      <section className="bg-[#E4EDE4] py-24 h-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-4xl lg:text-[45px] font-serif text-[#2E2535] text-center mb-8">
            My Professional Background
          </h2>

          <div className="border-t border-[#A8BFA8]">
            {backgroundItems.map((item, index) => {
              const isOpen = openSecondIndex === index;
              return (
                <div key={index} className="border-b-2  border-gray-500">
                  <button
                    onClick={() => setOpenSecondIndex(isOpen ? null : index)}
                    className="w-full py-4 cursor-pointer flex items-center justify-between text-left group"
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
                    <p className="text-[#2E2535]/80 w-full lg:w-100 mx-auto text-xl leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#6B3F7A] py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white">Get started today.</h2>
          <div className="text-white/90 text-lg md:text-xl space-y-2">
            <p>Ready to take the first step toward feeling more like yourself?</p>
            <p>Reach out to schedule a consultation. I look forward to hearing from you and exploring whether we'd be a good fit.</p>
          </div>
          <div className="pt-8">
            <button className="border cursor-pointer border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-[#6B3F7A] transition-all duration-300">
              Get in Touch &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER*/}
      <footer className="w-full bg-[#F2F6F2] text-[#2E2535] pt-16 font-sans">
  <div className="max-w-8xl mx-auto px-5 md:px-12">
    
    {/* 4-Column Grid System */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
      
      {/* Column 1 & 2: Dr. Maya Reynolds (Spans half the footer) */}
      <div className="md:col-span-2">
        <h2 className="text-4xl font-normal mb-6">Dr. Maya Reynolds</h2>
        <div className="space-y-1 text-lg">
          <p>123th Street 45 W</p>
          <p>Santa Monica, CA 90401</p>
          <div className="pt-4 flex flex-col">
            <a href="mailto:email@example.com" className="underline underline-offset-4 w-fit">email@example.com</a>
            <a href="tel:5555555555" className="underline underline-offset-4 w-fit">(555) 555-5555</a>
          </div>
        </div>
      </div>

      {/* Column 3: Hours (Shifted toward the right) */}
      <div className="md:col-span-1 md:flex md:flex-col md:items-end">
        <div className="w-fit"> {/* Wrapper to keep text left-aligned but container right-aligned */}
          <h3 className="text-3xl font-normal mb-6">Hours</h3>
          <div className="text-lg">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>
      </div>

      {/* Column 4: Find (At the far end) */}
      <div className="md:col-span-1 md:flex md:flex-col md:items-end">
        <div className="w-fit">
          <h3 className="text-3xl font-normal mb-6">Find</h3>
          <nav className="flex flex-col space-y-2 text-lg">
            <Link href="/" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Contact</Link>
            <Link href="/blog" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Blog</Link>
          </nav>
        </div>
      </div>
      
    </div>

    {/* Footer bottom section */}
    <div className="border-t border-[#D9D0EE] -mx-5 md:-mx-12">
      <div className="bg-[#EDE8F5] py-10 px-5 w-full text-center text-sm">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <Link href="/privacy" className="underline">Privacy & Cookies Policy</Link>
          <Link href="/estimate" className="underline">Good Faith Estimate</Link>
          <Link href="/terms" className="underline">Website Terms & Conditions</Link>
          <Link href="/disclaimer" className="underline">Disclaimer</Link>
        </div>
        <div className="opacity-80 space-y-2">
          <p>Website Template Credits: <a href="#" className="underline">Go Bloom Creative</a></p>
          <p>All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}