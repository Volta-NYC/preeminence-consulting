import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { servicesOverview } from "@/lib/legacy-content";
import { serviceLinks } from "@/lib/site-data";
import { wixMedia } from "@/lib/wix-media";

const serviceImages = [
  {
    src: wixMedia("11062b_c2a8a56823da4f588522214ca36ccfa8~mv2.jpg", 1400, 680),
    alt: "School building and educational infrastructure",
  },
];

const serviceRouteMap: Record<string, string> = {
  "Strategic Consulting": "/corporate-institutions",
  "Curriculum & Program Development": "/services/pd-presentation-creation",
  "Curriculum Audit & Program Improvement": "/corporate-institutions",
  "Curriculum Licensing": "/services/brand-academy",
  "Training & Workshop Development": "/services/train-the-trainer-academy",
  "Program Evaluation & Impact Support": "/corporate-institutions",
  "Coaching & Professional Development": "/book-online",
  "Speaking, Facilitation & Professional Learning": "/services/speakers-academy",
};

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">{servicesOverview.heading}</h1>
        <p className="mt-3 text-xl font-semibold text-emerald-700">{servicesOverview.tagline}</p>

        <section className="mt-8 grid grid-cols-1 gap-6">
          {serviceImages.map((image) => (
            <div key={image.src} className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11284a]/35 via-transparent to-transparent" />
            </div>
          ))}
        </section>

        <section className="mt-10 space-y-6">
          {servicesOverview.serviceItems.map((service, index) => (
            <Link
              key={service.title}
              href={serviceRouteMap[service.title] ?? "/contact"}
              className="group block rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md transition hover:-translate-y-1 hover:border-[#f4c64f]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Service {index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold text-[#11284a] transition group-hover:text-red-700">{service.title}</h2>
              <p className="mt-2 text-base font-semibold text-emerald-700">{service.subtitle}</p>
              <p className="mt-4 text-slate-600">{service.description}</p>
              <p className="mt-3 text-slate-600">{service.detail}</p>
              <div className="mt-5 rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3">
                <p className="text-sm font-bold text-[#11284a]">Best for</p>
                <p className="mt-1 text-sm text-slate-600">{service.bestFor}</p>
              </div>
              <p className="mt-5 text-sm font-bold text-red-700 transition group-hover:text-emerald-700">Open Service Page -&gt;</p>
            </Link>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#11284a]">How We Work</h2>
          <p className="mt-3 text-slate-600">{servicesOverview.process}</p>

          <h3 className="mt-7 text-xl font-bold text-[#11284a]">Who We Serve</h3>
          <p className="mt-2 text-slate-600">{servicesOverview.whoWeServe}</p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {["Schools", "Nonprofits", "Workforce Programs", "Corporate L&D Teams"].map((sector) => (
              <div key={sector} className="rounded-2xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3 text-sm font-semibold text-[#11284a]">
                {sector}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#11284a]">Services & Academies Pages</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-[#cfd9f2] bg-[#f4f7ff] px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-[#f4c64f]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
