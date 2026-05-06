import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { bookOnlineServices } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const bookServiceImages = [
  {
    src: wixMedia("8cc4ec_e2327a37344c45c292ba96b0cbae0c28~mv2.jpeg", 1200, 760),
    alt: "One-on-one discovery coaching session visual",
  },
  {
    src: wixMedia("8cc4ec_f74e402c7c4a498d87d2241e39f37b0c~mv2.jpg", 1200, 760),
    alt: "Coaching and mentoring session visual",
  },
];

export default function BookOnlinePage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a]">Book Online</h1>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="font-semibold text-[#11284a] transition hover:text-emerald-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="font-semibold text-[#11284a] transition hover:text-emerald-700">
            Services
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#11284a]">Our Services</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-[#11284a]">Service Information</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Book Preeminence Professional services directly below. Choose your service, review service information, and
          reserve your session.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {bookOnlineServices.map((offering, index) => (
            <article key={offering.title} className="overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
              <div className="group relative min-h-[300px] border-b border-[#cfd9f2]">
                <Image
                  src={bookServiceImages[index % bookServiceImages.length].src}
                  alt={bookServiceImages[index % bookServiceImages.length].alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#11284a]">{offering.availability}</p>
                <h2 className="mt-2 text-2xl font-bold text-[#11284a]">{offering.title}</h2>
                <p className="mt-3 text-slate-600">Duration: {offering.duration}</p>
                <p className="mt-1 text-slate-600">{offering.price.replace("$", "")} US dollars</p>
                <p className="mt-1 text-slate-600">Price: {offering.price}</p>
                <button className="mt-6 rounded-full bg-[#f4c64f] px-5 py-3 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]">
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
