import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { testimonials } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

export default function TestimonialsPage() {
  const placeholders = [
    "Placeholder review 01",
    "Placeholder review 02",
    "Placeholder review 03",
    "Placeholder review 04",
    "Placeholder review 05",
  ];

  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <section className="group relative overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-10 shadow-md">
          <Image
            src={wixMedia("11062b_e9f700b90d674bff8e412e4bfe38ab9f~mv2.jpg", 1400, 680)}
            alt="Client testimonial and feedback visual"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11284a]/85 to-[#11284a]/55" />
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-extrabold md:text-5xl">{testimonials.heading}</h1>
            <h2 className="mt-4 text-2xl font-bold">{testimonials.subheading}</h2>
            <p className="mt-4 text-lg">{testimonials.cta}</p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h3 className="text-2xl font-bold text-[#11284a]">Reviews</h3>
          <p className="mt-2 text-slate-600">Five placeholder spaces are set below for incoming client reviews.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {placeholders.map((item, index) => (
              <article
                key={item}
                className={`rounded-2xl border border-dashed border-[#c2cfe9] bg-[#eaf0ff] p-5 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Review Slot {index + 1}</p>
                <p className="mt-2 text-base font-semibold text-[#11284a]">{item}</p>
                <p className="mt-2 text-sm text-slate-500">Client testimonial content will be added here.</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
