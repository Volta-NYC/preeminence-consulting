import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { impactCircle } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

export default function ImpactCirclePage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">{impactCircle.title}</h1>
        <div className="mt-5 space-y-2 text-slate-600">
          {impactCircle.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-4 text-slate-600">{impactCircle.overview}</p>

        <section className="group relative mt-8 min-h-[280px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
          <Image
            src={wixMedia("8cc4ec_0d21eab1d23543e8af984cdbbf60f0da~mv2.png", 1400, 620)}
            alt="Impact Circle membership and growth visual"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11284a]/75 to-[#11284a]/35" />
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Best Value</p>
          <h2 className="mt-2 text-3xl font-bold text-[#11284a]">{impactCircle.membership.title}</h2>
          <p className="mt-2 text-3xl font-extrabold text-emerald-700">{impactCircle.membership.price}</p>
          <p className="mt-1 text-sm text-slate-500">{impactCircle.membership.billing}</p>
          <p className="mt-1 text-sm text-slate-500">{impactCircle.membership.validity}</p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
            {impactCircle.membership.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-bold text-[#11284a]">Who This Is For</h3>
          <div className="mt-3 space-y-2 text-slate-600">
            {impactCircle.whoFor.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-5 text-slate-600">{impactCircle.closing}</p>

          <button className="magnetic-cta mt-7 rounded-full bg-[#f4c64f] px-5 py-3 text-sm font-extrabold text-[#111827] transition hover:bg-[#f7ce62]">
            Join the Impact Circle - $97/month
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
