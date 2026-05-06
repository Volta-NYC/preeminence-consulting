import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { pdPresentationCreation } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const packageImages = [
  wixMedia("11062b_c2a8a56823da4f588522214ca36ccfa8~mv2.jpg", 1200, 760),
  wixMedia("8cc4ec_a62a1617e7e742cf9b8ccef1d0051d42~mv2.png", 1200, 760),
  wixMedia("8cc4ec_ace15997f79c4220a123ad27b8b5f285~mv2.jpeg", 1200, 760),
];

function getTurnaround(features: string[]) {
  return features.find((feature) => feature.toLowerCase().includes("turnaround time"));
}

export default function PdPresentationCreationPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Professional Development Packages</p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#11284a] md:text-5xl">{pdPresentationCreation.title}</h1>
        <p className="mt-4 text-lg font-semibold text-emerald-700">{pdPresentationCreation.cta}</p>

        <div className="mt-5 space-y-3 text-slate-600">
          {pdPresentationCreation.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h2 className="text-xl font-bold text-red-700">What&apos;s Included in Every Package</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {pdPresentationCreation.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#378ADD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h3 className="text-xl font-bold text-red-700">Who This Is For</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {pdPresentationCreation.audiences.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pdPresentationCreation.plans.map((plan, index) => {
            const isFeatured = index === 1;
            const turnaround = getTurnaround(plan.features);
            const features = plan.features.filter((feature) => !feature.toLowerCase().includes("turnaround time"));

            return (
              <article
                key={plan.title}
                className={`overflow-hidden rounded-3xl border bg-[#f4f7ff] shadow-md ${
                  isFeatured ? "border-2 border-[#185FA5]" : "border-[#cfd9f2]"
                }`}
              >
                {isFeatured ? (
                  <div className="border-b border-[#cfd9f2] bg-[#e6f1fb] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#0C447C]">
                    Best Value
                  </div>
                ) : null}

                <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                  <Image
                    src={packageImages[index % packageImages.length]}
                    alt={`${plan.title} presentation package visual`}
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Package {index + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-red-700">{plan.title}</h2>
                  <p className="mt-2 text-3xl font-extrabold text-[#11284a]">{plan.price}</p>
                  {turnaround ? (
                    <p className="mt-3 inline-flex rounded-full border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-1 text-xs font-semibold text-slate-600">
                      {turnaround}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                  <div className="my-4 h-px bg-[#cfd9f2]" />
                  <ul className="space-y-2 text-sm text-slate-600">
                    {features.map((feature) => {
                      const isAnchor = feature.includes("Licensing rights") || feature.includes("saves $1,000");
                      return (
                        <li
                          key={feature}
                          className={`rounded-lg pl-3 ${isAnchor ? "border-l-2 border-[#185FA5] bg-[#e6f1fb] py-2 font-semibold text-[#0C447C]" : ""}`}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isFeatured
                        ? "bg-[#185FA5] text-white hover:bg-[#0C447C]"
                        : "bg-[#f4c64f] text-[#111827] hover:bg-[#f7ce62]"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h3 className="text-lg font-bold text-[#11284a]">Why Clients Choose Preeminence</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {pdPresentationCreation.whyChoose.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#378ADD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h3 className="text-lg font-bold text-[#11284a]">How To Book Your Package</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              {pdPresentationCreation.bookingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </section>

        <section className="mt-8 flex items-start gap-3 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] px-4 py-3 text-sm text-slate-600">
          <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 stroke-[#11284a]" strokeWidth="1.5">
            <path d="M12 9v4m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>
            <span className="font-semibold text-[#11284a]">Need a custom scope?</span> If your organization needs a
            different session count, format, or delivery timeline, book a consultation and we will build a custom
            proposal aligned to your needs.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
