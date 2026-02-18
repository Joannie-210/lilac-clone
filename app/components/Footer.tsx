import Link from 'next/link';

export default function () {
    return (
        <>
         <footer className="w-full bg-[#F2F6F2] text-[#2E2535] pt-16 font-sans">
        <div className="max-w-8xl  mx-auto">
          <div className="grid px-5 md:px-12 grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            
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

          {/* Footer bottom  */}
          <div className="border-t bg-[#EDE8F5] border-[#D9D0EE]  py-8 w-full text-center text-sm space-y-4">
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
        </>
    )
}