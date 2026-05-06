import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { programsLinks } from "@/lib/site-data";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Programs</h1>
        <p className="mt-4 max-w-4xl text-slate-600">
          Explore PPCA training programs and academies designed to strengthen communication, curriculum delivery,
          leadership capacity, and professional impact.
        </p>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {programsLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] px-5 py-4 text-lg font-bold text-[#11284a] shadow-sm transition hover:-translate-y-1 hover:border-[#f4c64f]"
            >
              {item.label}
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
