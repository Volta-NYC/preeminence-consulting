import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { aboutCopy } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">About Us</h1>
        <h2 className="mt-6 text-2xl font-bold text-[#11284a]">{aboutCopy.heading}</h2>
        <div className="mt-4 space-y-3 text-slate-600">
          {aboutCopy.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative min-h-[620px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
            <Image
              src={wixMedia("8cc4ec_bb3d9994b8504df7937d75964bd2a872~mv2.avif", 760, 1240)}
              alt="Dr. Anesha Fuller founder portrait"
              fill
              className="object-cover object-top"
            />
          </div>

          <article className="rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#11284a]">MEET OUR FOUNDER &amp; CEO</h2>
            <h3 className="mt-4 text-2xl font-bold text-emerald-700">{aboutCopy.founderName}</h3>
            <p className="mt-2 text-sm font-semibold text-[#11284a]">{aboutCopy.founderRole}</p>
            <p className="mt-3 rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3 text-sm font-bold text-[#11284a]">
              {aboutCopy.founderStandard}
            </p>
            <div className="mt-4 space-y-3 text-slate-600">
              {aboutCopy.founderText.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <h4 className="mt-6 text-lg font-bold text-[#11284a]">Areas of Expertise</h4>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
              {aboutCopy.founderFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4 className="mt-6 text-lg font-bold text-[#11284a]">Work &amp; Impact</h4>
            <p className="mt-2 text-slate-600">{aboutCopy.workImpact}</p>
            <h4 className="mt-6 text-lg font-bold text-[#11284a]">Leadership Philosophy</h4>
            <div className="mt-2 space-y-2 text-slate-600">
              {aboutCopy.leadershipPhilosophy.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
