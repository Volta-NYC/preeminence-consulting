import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { instantAccessDownloads } from "@/lib/legacy-content";

export default function MemberLibraryPage() {
  return (
    <div className="min-h-screen bg-[#e6efff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Download Library Links</h1>
        <p className="mt-4 max-w-4xl text-slate-600">
          This page keeps direct links to the current Instant Access Downloads product pages from the live
          Preeminence website.
        </p>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">Current Product Links</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {instantAccessDownloads.products.map((product) => (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#cfd9f2] bg-[#dfe9ff] px-4 py-3 text-sm font-semibold text-[#11284a] transition hover:-translate-y-1 hover:border-[#f4c64f]"
              >
                {product.title}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-7 shadow-md">
            <h2 className="text-2xl font-bold text-[#11284a]">See The Product Grid</h2>
            <p className="mt-3 text-slate-600">
              Return to the Instant Access Downloads grid with images, pricing, and direct access links.
            </p>
            <Link
              href="/instant-access-downloads"
              className="mt-6 inline-flex rounded-full bg-[#11284a] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#1a3a64]"
            >
              View Downloads
            </Link>
          </article>

          <article className="rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-7 shadow-md">
            <h2 className="text-2xl font-bold text-[#11284a]">Get Updates On New Downloads</h2>
            <p className="mt-3 text-slate-600">
              Join our mailing list to receive updates whenever new templates, e-books, and resource bundles are
              released.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact/subscriptions"
                className="rounded-full bg-[#f4c64f] px-5 py-2 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]"
              >
                Subscribe Now
              </Link>
              <Link
                href="/instant-access-downloads"
                className="rounded-full border border-[#11284a] px-5 py-2 text-sm font-bold text-[#11284a] transition hover:bg-[#dce8ff]"
              >
                Back To Downloads
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
