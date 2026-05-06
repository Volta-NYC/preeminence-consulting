import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { corporateInstitutions } from "@/lib/legacy-content";

export default function CorporateInstitutionsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">{corporateInstitutions.title}</h1>
        <p className="mt-3 text-xl font-semibold text-emerald-700">{corporateInstitutions.subtitle}</p>

        <section className="mt-8 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">Who We Serve</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {corporateInstitutions.whoWeServe.map((item) => (
              <div key={item} className="rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3 text-sm font-semibold text-[#11284a]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">The Problems We Solve</h2>
          <p className="mt-3 text-slate-600">{corporateInstitutions.problemSummary}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {corporateInstitutions.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#11284a]">What We Build</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {corporateInstitutions.whatWeBuild.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-700">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">Why Organizations Choose PPCA</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {corporateInstitutions.whyPPCA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#11284a]">What Organizations Experience</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            {corporateInstitutions.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#11284a]">How We Work</h3>
          <p className="mt-2 text-slate-600">{corporateInstitutions.process}</p>

          <h3 className="mt-7 text-xl font-bold text-[#11284a]">Engagement Options</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            {corporateInstitutions.engagementOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#11284a]">Is PPCA the Right Fit?</h3>
          <p className="mt-2 text-slate-600">{corporateInstitutions.fit}</p>
          <p className="mt-4 rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3 text-sm font-semibold text-[#11284a]">
            {corporateInstitutions.cta}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
