import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Blog() {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-[#FDF8F3] flex items-center justify-center px-9 py-8">
      <div className="max-w-6xl  md:gap-5 w-full grid grid-cols-1 md:grid-cols-2  items-center">
        
        {/* Left Side: Arched Image Container */}
        <div className="relative flex md:pl-0  max-w-3xl justify-center md:justify-center">
          <div className="relative w-full md:w-300px   max-w-[380px] h-[600px] overflow-hidden rounded-t-full">
            <Image
              src="/lilac-image-1.webp" // Replace with your image max-w-lg
              alt="Person reading a book"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-[#1D3319] space-y-6 lg:ml-[-20px] lg:mt-[-50px]  ">
          <h1 className="text-5xl md:text-6xl tracking-tight">
            The Lilac Blog
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90">
              My tiny corner of the internet where I talk about all things 
              healing, heart, and wholeness.
            </p>
            
            <p className="text-lg md:text-xl font-bold">
              Glad you&apos;re here.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}