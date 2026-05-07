import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { wixMedia } from "@/lib/wix-media";

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Subscribe to Stay Connected</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Stay connected and receive updates on our work, upcoming events, and opportunities by joining our email list
          below.
        </p>

        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#11284a]">Join Our Mailing List</h2>
            <form className="mt-6 grid grid-cols-1 gap-4" aria-label="Subscription form">
              <label className="text-sm font-semibold text-slate-700" htmlFor="sub-first-name">
                First name
              </label>
              <input id="sub-first-name" className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2" required />

              <label className="text-sm font-semibold text-slate-700" htmlFor="sub-last-name">
                Last name
              </label>
              <input id="sub-last-name" className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2" required />

              <label className="text-sm font-semibold text-slate-700" htmlFor="sub-phone">
                Phone
              </label>
              <input id="sub-phone" type="tel" className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2" />

              <label className="text-sm font-semibold text-slate-700" htmlFor="sub-email">
                Email
              </label>
              <input id="sub-email" type="email" className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2" required />

              <label className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" required /> I want to subscribe to your mailing list.
              </label>

              <button
                type="submit"
                className="magnetic-cta mt-2 rounded-full bg-[#f4c64f] px-5 py-3 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]"
              >
                Subscribe
              </button>
            </form>
          </article>

          <article className="flex h-full flex-col rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#11284a]">Need Direct Support?</h2>
            <p className="mt-3 text-slate-600">
              For additional information regarding services or products, reach out directly and we will respond as soon
              as possible.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] p-4 text-slate-700">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Email</p>
                <a className="mt-1 block text-sm font-semibold text-[#11284a]" href="mailto:preeminencepros@gmail.com">
                  preeminencepros@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] p-4 text-slate-700">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Phone</p>
                <a className="mt-1 block text-sm font-semibold text-[#11284a]" href="tel:+17185411107">
                  (718) 541-1107
                </a>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-[#11284a] px-5 py-2 text-sm font-bold text-[#11284a] transition hover:bg-[#e3ebfb]"
              >
                Back To Contact
              </Link>
              <Link
                href="/instant-access-downloads"
                className="inline-flex rounded-full bg-[#f4c64f] px-5 py-2 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]"
              >
                Instant Access Downloads
              </Link>
            </div>
          </article>
        </section>

        <section className="group relative mt-10 min-h-[280px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
          <Image
            src={wixMedia("8cc4ec_28207c6b80a24511a75fcaad2545e8b4~mv2.jpg", 1400, 560)}
            alt="Subscription and community updates banner"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11284a]/80 to-[#11284a]/35" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold">Mailing List Updates</h2>
            <p className="mt-3 max-w-2xl text-slate-100">
              Get announcements about workshops, events, academies, and community opportunities delivered directly to
              your inbox.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
