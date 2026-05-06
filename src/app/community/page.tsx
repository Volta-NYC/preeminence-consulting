import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { communityLinks } from "@/lib/site-data";
import { wixMedia } from "@/lib/wix-media";

export default function CommunityOverviewPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Community</h1>
        <p className="mt-4 max-w-4xl text-slate-600">
          Explore the Preeminence community through the Impact Circle, upcoming events, and member groups from the
          original website.
        </p>

        <section className="group relative mt-8 min-h-[280px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
          <Image
            src={wixMedia("8cc4ec_0d21eab1d23543e8af984cdbbf60f0da~mv2.png", 1400, 620)}
            alt="Preeminence community growth visual"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11284a]/75 to-[#11284a]/45" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold">Build Connections. Grow Your Impact.</h2>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {communityLinks.map((item) => (
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
