import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-br from-teal-200 via-blue-100 to-pink-200 text-gray-900">
      {/* Header with Logo */}
      <header className="w-full py-6 flex justify-center">
        <Image
          src="/vioo-logo.jpg" 
          alt="Company Logo"
          width={120}
          height={60}
          className="object-contain rounded-full"
        />
      </header>

      {/* Hero */}
      <section className="max-w-10xl mx-auto px-6 bg-[url('/ug4.jpg')] bg-cover bg-center bg-no-repeat py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            THE AMD <span className="text-red-600">LIKE THE SERVICE</span>
          </h1>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="tel:+254791862878"
              className="px-6 py-3 mt-4 bg-white rounded-lg text-blue-400 transition duration-300 hover:bg-gray-200"
            >
              Call us
            </a>
            
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/ug6.jpg"
            alt="Headset"
            width={50}
            height={50}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-10xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">All-new technology</h2>
          <p className="text-gray-700">
            News write-ups offer a great way to let clients know about new
            products and services, events, awards, and more. News write-ups
            offer a great way to let clients know about new products and
            services, events, awards, and more.
          </p>
        </div>
        <div>
          <Image
            src="/ugbg.jpg"
            alt="Technology"
            width={800}
            height={100}
            className="rounded-xl shadow"
          />
        </div>
      </section>
      {/* Support */}
      <section className="max-w-10xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/ug8.jpg"
            alt="Support"
            width={500}
            height={300}
            className="rounded-xl shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expert Support</h2>
          <p className="text-gray-700 mb-6">
            Aluminium, Glass Fabrication Installation & Fixing
            we can assist you. <br />
            Call us 
          </p>
          <h3 className="font-semibold uppercase text-gray-800">
            Our Locations
          </h3>
          <p className="text-gray-600 text-sm">
            Nairobi City <br /> Nairobi <br /> +254 791 862878
          </p>
        </div>
        
      </section>

      {/* Shop by Category */}
      <section id="shop" className="max-w-10xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-10">We at work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phones */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug2.jpg" alt="Phones" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">PHONES & ACCESSORIES</h3>
              <p className="text-sm text-gray-600">
                High class, high quality phones at affordable prices
              </p>
            </div>
          </div>
          {/* Computers */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug10.jpg" alt="Computers" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">COMPUTER EQUIPMENT</h3>
              <p className="text-sm text-gray-600">
                All your desktop or laptop needs made available
              </p>
            </div>
          </div>
          {/* Misc */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug5.jpg" alt="Misc" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">MISCELLANEOUS ITEMS</h3>
              <p className="text-sm text-gray-600">
                We’ve got more stuff to meet your techie needs
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="mailto:davidiamond.green@gmail.com"
            className="px-6 py-3 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300"
          >
            Email us
          </a>
        </div>
      </section>

      {/* Support */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expert Support</h2>
          <p className="text-gray-700 mb-6">
            Faulty phone battery? Slow laptop? We have in-house tech experts who
            can assist you. <br />
            Visit us in stores!
          </p>
          <h3 className="font-semibold uppercase text-gray-800">
            Our Locations
          </h3>
          <p className="text-gray-600 text-sm"> Nairobi, Kenya <br /><a href="tel:+254791862878">+254 791 862878
            456 7890</a>
          </p>
        </div>
        <div>
          <Image
            src="/ug8.jpg"
            alt="Support"
            width={500}
            height={300}
            className="rounded-xl shadow"
          />
        </div>
      </section>

      <section id="shop" className="max-w-10xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-10">Videos & Articles of what we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phones */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug2.jpg" alt="Phones" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">PHONES & ACCESSORIES</h3>
              <p className="text-sm text-gray-600">
                High class, high quality phones at affordable prices
              </p>
            </div>
          </div>
          {/* Computers */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug6.jpg" alt="Computers" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">COMPUTER EQUIPMENT</h3>
              <p className="text-sm text-gray-600">
                All your desktop or laptop needs made available
              </p>
            </div>
          </div>
          {/* Misc */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image src="/ug5.jpg" alt="Misc" width={400} height={300} />
            <div className="p-4">
              <h3 className="font-semibold">MISCELLANEOUS ITEMS</h3>
              <p className="text-sm text-gray-600">
                We’ve got more stuff to meet your techie needs
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-16  text-white">
        <div className="max-w-10xl rounded-xl bg-gray-800 text-2xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Connect with us</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Main Office</h3>
            <p className="text-sm text-white">Nairobi City <br /> Kenya <br />
              <a href="tel:+254791862878">+254 791 862878</a>
            </p>
            <p className="text-sm mt-2" >
            <a href="mailto:davidiamond.green@gmail.com">davidiamond.green@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social Media</h3>
            <ul className="space-y-1 text-sm text-white">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
