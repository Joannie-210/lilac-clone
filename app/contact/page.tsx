import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
<>

      {/* Navigation Header */}
     <Navbar />
   
       <section className="bg-[#cdc9d3] min-h-screen py-16 px-6 md:px-20 lg:px-22 sm:flex flex flex-col justify-center font-sans text-[#1a2e1a]">
      <div className="max-w-7xl bg-green-400mx-auto w-full">
       
        {/* Header Section */}
        <h1 className="text-5xl md:text-7xl sm:text-left flex justify-center lg:justify-start w-full text-left font-serif mb-5 sm:mb-10 tracking-tight">
        
          Let&apos;s Connect
        </h1>
         <p className='md:text-left sm:w-full lg:w-80 lg:justify-start mb-4 w-full flex justify-center items-center text-lg'>Starting therapy is courageous.</p>
         <p className='md:text-left sm:w-full lg:w-80 flex justify-center text-center text-lg '>Get in touch for questions, or to book a free 15-minute consultation.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Text and Overlapping Images */}
          <div className=" space-y-8">
            <div className="space-y-4 text-lg md:text-xl">
              {/* <p>Starting therapy is courageous.</p>
              <p className='w-50 text-xs'>Get in touch for questions, or to book a free 15-minute consultation.</p> */}
            </div>

            {/* Image Composition */}
            <div className="relative flex justify-center items-center lg:block w-auto md:pl-12 mt-2 pt-1">
              {/* Main Arched Image */}
               <div className="relative w-[180px] h-[250px] md:w-[220px] md:h-[360px] overflow-hidden rounded-t-full shadow-md">
                           <Image 
                             src="/lilac-image-8.webp" 
                             alt="Person holding lilacs"
                             fill
                             className="object-cover"
                           />
                         </div>
              
              {/* Secondary Circular Image */}
              <div className="absolute hidden lg:block -bottom-10 left-32 md:left-40 w-40 h-40 md:w-36 md:h-36 rounded-full border-[#cdc9d3] overflow-hidden bg-gray-100">
                <Image
                  src="/lilac-image-6.webp" 
                  alt="Close up flowers" 
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Right Column: Information Box */}
          <div className="w-auto h-full lg:mt-[-80px]">
            <div className="bg-[#263d1a] text-[#cdc9d3] p-8 md:px-5 md:py-8 leading-relaxed">
              <p className="text-md md:text-lg">
                <span className="font-bold">PLEASE NOTE:</span> If you opt to use a &quot;Form Block&quot; on 
                your contact page this is not HIPAA-compliant. Squarespace stores data that is input into 
                forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, 
                a link to your client portal, or simply put your email address.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-[#e5e1d8] min-h-[800px] py-20 px-6 flex flex-col items-center text-center font-sans text-[#1a2e1a]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-serif mb-10 tracking-tight">
          Book an appointment.
        </h2>

        {/* Description Text */}
        <p className="text-lg md:text-md leading-relaxed mb-36 px-4">
          Add some text here if you like, and add your scheduling widget below 
          (you can get one by signing up for a scheduling account through Squarespace, 
          the top-tier plan is HIPAA compliant OR you can use your client portal).
        </p>

        {/* Scheduling Widget Placeholder */}
        <div className="w-full max-w-md m-auto mb-35 bg-white shadow-sm min-h-[200px] flex flex-col items-center justify-center p-3 md:px-1">
          {/* This mimics the "Page Not Active" box in your screenshot */}
          <div className="space-y-6">
            <h3 className="text-md md:text-xl font-bold text-black">
              This page is not active
            </h3>
            <p className="text-gray-600 max-w-md w-80 text-sm mx-auto">
              If you&apos;re the owner, please log into your account to start a free trial or subscribe.
            </p>
            <button className="bg-black text-white px-2 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
              Go to Account
            </button>
          </div>
        </div>

      </div>
      <p className='text-xs'>Powered by</p>
      <p className='font-bold text-lg'>acuity:scheduling</p>
    </section>

     <section className="h-130 bg-[#7f7b45] text-white flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className=" pl-4">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              My Office
            </h1>

            <p className="text-lg leading-relaxed mb-10">
              123 Example Street<br />
              Minneapolis, MN
            </p>

            <h2 className="text-3xl font-semibold mb-4">
              Hours
            </h2>

            <p className="text-lg leading-relaxed">
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Minneapolis,MN&output=embed"
              className="w-full grayscale h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
     <section className="bg-[#f5f2e9] px-4 py-20 border-b-1 border-[#6e7a54]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-[#1f2d16] text-4xl md:text-5xl mb-5">
          Find me on social.
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="relative w-full aspect-[5/5]">
            <Image
              src="/lilac-image-8.webp"
              alt="Lilac bouquet"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full aspect-[5/5]">
            <Image
              src="/lilac-image-5.webp"
              alt="Woman organizing books"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full aspect-[5/5]">
            <Image
              src="/lilac-image-2.webp"
              alt="Notebook and coffee"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full aspect-[5/5]">
            <Image
              src="/lilac-image-1.webp"
              alt="Woman holding flowers"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}