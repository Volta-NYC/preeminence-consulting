import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { communicationSeries } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const images = [
  wixMedia("8cc4ec_f77be69f44e742b98dd63b9417ab329b~mv2.jpg", 1200, 620),
  wixMedia("8cc4ec_2f49bba099224fb38e8a7239abf069e1~mv2.jpg", 900, 620),
  wixMedia("8cc4ec_c17382d6d27b4c7198e51e052d0ad169~mv2.png", 900, 620),
];

const planImages = [...images].reverse();
const tierLabels = ["Tier 1 · Individual", "Tier 2 · Team", "Tier 3 · Corporate"];

export default function CommunicationSeriesPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">
          Executive Presence, Power & Impact
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#11284a] md:text-5xl">{communicationSeries.title}</h1>
        <p className="mt-4 text-lg font-semibold text-emerald-700">{communicationSeries.tagline}</p>
        <p className="mt-4 max-w-5xl text-slate-600">{communicationSeries.summary}</p>

        <section className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Format</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Live interactive · 4 weeks</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Includes</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Simulations, scripts, coaching</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Assessment</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Growth tracking and feedback</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Led by</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Dr. Anesha Fuller</p>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {communicationSeries.plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.title}
                className={`overflow-hidden rounded-3xl border bg-[#f4f7ff] shadow-md ${
                  isFeatured ? "border-2 border-emerald-700" : "border-[#cfd9f2]"
                }`}
              >
                {isFeatured ? (
                  <div className="border-b border-[#cfd9f2] bg-emerald-100 px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900">
                    Best For Teams
                  </div>
                ) : null}

                <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                  <Image
                    src={planImages[index % planImages.length]}
                    alt={`${plan.title} communication series package visual`}
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{tierLabels[index]}</p>
                  <h2 className="mt-2 text-2xl font-bold text-red-700">{plan.title}</h2>
                  <p className="mt-2 text-3xl font-extrabold text-[#11284a]">{plan.price}</p>
                  {plan.validity ? <p className="mt-1 text-xs text-slate-500">{plan.validity}</p> : null}
                  <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                  <div className="my-4 h-px bg-[#cfd9f2]" />
                  <ul className="space-y-2 text-sm text-slate-600">
                    {plan.features.map((feature) => {
                      const isAnchor =
                        feature.includes("Team impact report") ||
                        feature.includes("Leadership impact and sustainability report");

                      return (
                        <li
                          key={feature}
                          className={`rounded-lg pl-3 ${isAnchor ? "border-l-2 border-emerald-700 bg-emerald-50 py-2 font-semibold text-emerald-900" : ""}`}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isFeatured
                        ? "bg-emerald-700 text-white hover:bg-emerald-800"
                        : "bg-[#f4c64f] text-[#111827] hover:bg-[#f7ce62]"
                    }`}
                  >
                    {index === 2 ? "Book A Consultation" : "Enroll Now"}
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-8 flex items-start gap-3 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] px-4 py-3 text-sm text-slate-600">
          <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 stroke-[#11284a]" strokeWidth="1.5">
            <path d="M12 9v4m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>
            <span className="font-semibold text-[#11284a]">Corporate and institutional inquiries:</span> Tier 3
            programs are customized to your leadership structure and goals. Book a consultation to scope the right
            implementation path.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
