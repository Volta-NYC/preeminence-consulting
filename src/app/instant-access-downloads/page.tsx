import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { instantAccessDownloads } from "@/lib/legacy-content";

export default function InstantAccessDownloadsPage() {
  return (
    <div className="min-h-screen bg-[#e6efff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">{instantAccessDownloads.title}</h1>
        <p className="mt-4 max-w-4xl text-slate-600">{instantAccessDownloads.intro}</p>

        <section className="group relative mt-10 min-h-[280px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] shadow-md">
          <Image
            src={instantAccessDownloads.categoryImage}
            alt="Instant Access Downloads category visual from Preeminence Professional Consulting Agency"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11284a]/75 to-[#11284a]/30" />
          <div className="relative z-10 p-8 text-white">
            <p className="inline-flex rounded-full border border-[#f4c64f]/70 bg-[#f4c64f]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#fff7df]">
              From Current Website Catalog
            </p>
            <h2 className="mt-4 text-3xl font-bold">All Products</h2>
            <p className="mt-3 max-w-3xl text-slate-100">
              Select any product below to open the same download listing currently available on the live site.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#11284a]">Digital Download Collection</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {instantAccessDownloads.products.map((product) => (
              <article key={product.title} className="rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-6 shadow-md">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl border border-[#cfd9f2] bg-[#dce8ff]">
                  <Image src={product.image} alt={`${product.title} digital download cover`} fill className="object-cover" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b91c1c]">Instant Download</p>
                <h3 className="mt-2 text-xl font-bold text-[#11284a]">{product.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{product.description}</p>
                <p className="mt-4 text-lg font-extrabold text-[#11284a]">{product.price}</p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 rounded-full bg-[#f4c64f] px-5 py-2 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]"
                >
                  View Product
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#dce8ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">Need More Exclusive Resources?</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Join our member download library for expanded templates, e-books, and premium implementation resources.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/instant-access-downloads/member-library"
              className="rounded-full bg-[#11284a] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#1a3a64]"
            >
              View Member Library
            </Link>
            <Link
              href="/contact/subscriptions"
              className="rounded-full border border-[#11284a] px-5 py-2 text-sm font-bold text-[#11284a] transition hover:bg-[#edf3ff]"
            >
              Join Mailing List
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
