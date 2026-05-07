import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { speakersAcademy } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const images = [
  wixMedia("8cc4ec_0f4a2481acab4e718e3cf3c6db8498fc~mv2.jpg", 1200, 650),
  wixMedia("8cc4ec_90e3aa1f1e1349b1a6e844f25922cb51~mv2.jpg", 1000, 620),
  wixMedia("8cc4ec_a1512a6d9a4d46728ac37f4a61672983~mv2.png", 1000, 620),
];

const planImages = [...images].reverse();
const tierLabels = ["Tier 1 · Foundations", "Tier 2 · Authority", "Tier 3 · Scale"];

export default function SpeakersAcademyPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Influence & Impact Speaker Academy</p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#11284a] md:text-5xl">{speakersAcademy.title}</h1>
        <p className="mt-4 text-lg font-semibold text-emerald-700">{speakersAcademy.tagline}</p>
        <p className="mt-4 max-w-5xl text-slate-600">{speakersAcademy.summary}</p>

        <section className="mt-8 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">What You Will Be Able To Do By Graduation</h2>
          <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {speakersAcademy.outcomes.map((item) => (
              <p key={item} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#ef476f]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Who This Academy Is For</h3>
          <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {speakersAcademy.whoFor.map((item) => (
              <p key={item} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {speakersAcademy.plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.title}
                className={`overflow-hidden rounded-3xl border bg-[#f4f7ff] shadow-md ${
                  isFeatured ? "border-2 border-[#993556]" : "border-[#cfd9f2]"
                }`}
              >
                {isFeatured ? (
                  <div className="border-b border-[#cfd9f2] bg-[#fbeaf0] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#72243E]">
                    Most Popular
                  </div>
                ) : null}

                <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                  <Image
                    src={planImages[index % planImages.length]}
                    alt={`${plan.title} speaker academy package visual`}
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
                    {plan.features.map((feature, featureIndex) => {
                      const isAnchor =
                        (index === 1 && featureIndex === plan.features.length - 2) ||
                        (index === 2 && feature.includes("Speaker one-sheet"));

                      return (
                        <li
                          key={feature}
                          className={`rounded-lg pl-3 ${isAnchor ? "border-l-2 border-[#993556] bg-[#fbeaf0] py-2 font-semibold text-[#72243E]" : ""}`}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`magnetic-cta mt-6 w-full rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isFeatured
                        ? "bg-[#993556] text-white hover:bg-[#72243E]"
                        : "bg-[#f4c64f] text-[#111827] hover:bg-[#f7ce62]"
                    }`}
                  >
                    Enroll Now
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
            <span className="font-semibold text-[#11284a]">Not sure which tier fits your goals?</span> Book a
            consultation and we will help identify the best entry point before enrollment.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
