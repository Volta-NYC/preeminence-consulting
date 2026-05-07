import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { brandAcademy } from "@/lib/legacy-content";

export default function BrandAcademyPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Preeminence Brand Academy</p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#11284a] md:text-5xl">{brandAcademy.title}</h1>
        <div className="mt-5 max-w-5xl space-y-3 text-slate-600">
          <p>{brandAcademy.about}</p>
          <p>{brandAcademy.detail}</p>
          <p>{brandAcademy.more}</p>
        </div>

        <section className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Format</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Live virtual · 4 weeks</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Instruction</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Fully live, no recordings</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Led by</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Dr. Anesha Fuller</p>
          </div>
          <div className="rounded-xl bg-[#eaf0ff] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Includes</p>
            <p className="mt-1 text-sm font-semibold text-[#11284a]">Interactive coaching and feedback</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h2 className="text-xl font-bold text-red-700">What You&apos;ll Learn</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {brandAcademy.learn.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#BA7517]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5">
            <h3 className="text-xl font-bold text-red-700">Included</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {brandAcademy.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {brandAcademy.plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.title}
                className={`overflow-hidden rounded-3xl border bg-[#f4f7ff] shadow-md ${
                  isFeatured ? "border-2 border-[#BA7517]" : "border-[#cfd9f2]"
                }`}
              >
                {isFeatured ? (
                  <div className="border-b border-[#cfd9f2] bg-[#faeeda] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#633806]">
                    Most Popular
                  </div>
                ) : null}

                <div className="flex min-h-[230px] items-center justify-center border-b border-[#cfd9f2] bg-gradient-to-br from-[#f4f7ff] to-[#e2ebff] px-6 text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    {plan.title} Program Visual
                  </p>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Tier {index + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-red-700">{plan.title}</h2>
                  <p className="mt-2 text-3xl font-extrabold text-[#11284a]">{plan.price}</p>
                  {plan.validity ? <p className="mt-1 text-xs text-slate-500">{plan.validity}</p> : null}
                  <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                  <div className="my-4 h-px bg-[#cfd9f2]" />
                  <ul className="space-y-2 text-sm text-slate-600">
                    {plan.features.map((feature) => {
                      const isAnchor = feature.includes("private strategy call") || feature.includes("customized presentation strategy plan");
                      return (
                        <li
                          key={feature}
                          className={`rounded-lg pl-3 ${isAnchor ? "border-l-2 border-[#BA7517] bg-[#faeeda] py-2 font-semibold text-[#633806]" : ""}`}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`magnetic-cta mt-6 w-full rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isFeatured
                        ? "bg-[#BA7517] text-white hover:bg-[#854F0B]"
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
            <span className="font-semibold text-[#11284a]">Need help selecting the right access level?</span> Book a
            consultation and we will map your tier to your goals before enrollment.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
