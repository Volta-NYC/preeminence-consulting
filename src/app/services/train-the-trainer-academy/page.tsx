import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { trainTheTrainer } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const planImages = [
  wixMedia("nsplsh_a878e42d761f43fda2af0f6055c04e85~mv2.jpg", 1000, 620),
  wixMedia("11062b_c2a8a56823da4f588522214ca36ccfa8~mv2.jpg", 1000, 620),
  wixMedia("nsplsh_a878e42d761f43fda2af0f6055c04e85~mv2.jpg", 1000, 620),
  wixMedia("11062b_c2a8a56823da4f588522214ca36ccfa8~mv2.jpg", 1000, 620),
  wixMedia("nsplsh_a878e42d761f43fda2af0f6055c04e85~mv2.jpg", 1000, 620),
];

const tierLabels = [
  "Tier 1 · Individual",
  "Tier 2 · VIP",
  "Tier 3 · Team",
  "Tier 4 · Mid-size",
  "Tier 5 · Enterprise",
];

export default function TrainTheTrainerPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Train-the-Trainer Academy</p>
        <h1 className="mt-2 text-4xl font-extrabold text-[#11284a] md:text-5xl">{trainTheTrainer.title}</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">{trainTheTrainer.presentedBy}</p>
        <p className="mt-4 max-w-5xl text-slate-600">{trainTheTrainer.summary}</p>
        <p className="mt-3 max-w-5xl text-slate-600">{trainTheTrainer.summaryMore}</p>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">What You Will Learn</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {trainTheTrainer.learn.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] p-4">
                <h3 className="text-lg font-bold text-[#11284a]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-bold text-[#11284a]">Who This Academy Is For</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            {trainTheTrainer.whoFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#7F77DD]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-bold text-[#11284a]">The Outcome</h3>
          <p className="mt-2 text-slate-600">{trainTheTrainer.outcome}</p>
          <h3 className="mt-8 text-xl font-bold text-[#11284a]">Program Details</h3>
          <p className="mt-2 text-slate-600">{trainTheTrainer.programDetails}</p>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainTheTrainer.plans.map((plan, index) => {
            const isFeatured = index === 1;
            const isOrgBest = index === 3;

            return (
              <article
                key={plan.title}
                className={`overflow-hidden rounded-3xl border bg-[#f4f7ff] shadow-md ${
                  isFeatured
                    ? "border-2 border-[#534AB7]"
                    : isOrgBest
                      ? "border-2 border-emerald-700"
                      : "border-[#cfd9f2]"
                }`}
              >
                {isFeatured ? (
                  <div className="border-b border-[#cfd9f2] bg-[#EEEDFE] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#3C3489]">
                    Most Popular
                  </div>
                ) : null}
                {isOrgBest ? (
                  <div className="border-b border-[#cfd9f2] bg-emerald-100 px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900">
                    Best For Organizations
                  </div>
                ) : null}

                <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                  <Image
                    src={planImages[index]}
                    alt={`${plan.title} train-the-trainer package visual`}
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
                        (index === 3 && feature.includes("Post-training recommendations")) ||
                        (index === 4 && feature.includes("Strategic recommendations"));

                      return (
                        <li
                          key={feature}
                          className={`rounded-lg pl-3 ${
                            isAnchor
                              ? "border-l-2 border-emerald-700 bg-emerald-50 py-2 font-semibold text-emerald-900"
                              : ""
                          }`}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      isFeatured
                        ? "bg-[#534AB7] text-white hover:bg-[#3C3489]"
                        : isOrgBest
                          ? "bg-emerald-700 text-white hover:bg-emerald-800"
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
            <span className="font-semibold text-[#11284a]">Not sure which tier is right?</span> Book a consultation
            and we will recommend the best fit based on your team size, training goals, and rollout timeline.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
