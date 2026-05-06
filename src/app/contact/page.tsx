import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { socialLinks } from "@/lib/site-data";

const inquiryTypes = [
  "Strategic Consulting",
  "Curriculum & Program Development",
  "Training & Workshop Development",
  "Speaking / Facilitation Request",
  "Corporate or Institutional Partnership",
];

const whoShouldReachOut = [
  "Organizations seeking curriculum or program design",
  "Leaders needing an audit or strategic consulting",
  "Teams building training systems",
  "Institutions exploring contracts or partnerships",
  "Event organizers booking speaking engagements",
];

const mailingListBenefits = [
  "Insights on curriculum design and program development",
  "Training opportunities and upcoming events",
  "Tools to strengthen your organization",
  "Announcements on new PPCA programs and offerings",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <section className="overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
          <div className="bg-[#1a1714] px-6 py-8 text-white md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c64f]">
              Preeminence Professional Consulting Agency
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Contact & <span className="text-[#f4c64f]">Inquiries</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200">
              We partner with organizations, institutions, and professionals ready to strengthen their programs.
              Complete the form below and our team will respond within 24-48 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1fr_320px] md:px-10">
            <article>
              <div className="mb-5 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Submit an Inquiry</p>
                <div className="h-px w-16 bg-[#cfd9f2]" />
              </div>

              <form className="grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Contact inquiry form">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="full-name">
                    Full name *
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    required
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="organization">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="email">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="inquiry-type">
                    Type of inquiry *
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiryType"
                    required
                    defaultValue=""
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    {inquiryTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-600" htmlFor="message">
                    Tell us about your needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2.5 text-sm text-slate-700 outline-none ring-[#f4c64f] focus:ring-2"
                    placeholder="Briefly describe your organization, your current challenge or goal, and what you are hoping to accomplish."
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="mt-1 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="rounded-full bg-[#11284a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1a3a64]"
                    >
                      Submit Inquiry
                    </button>
                    <p className="text-xs text-slate-500">Response within 24-48 business hours</p>
                  </div>
                </div>
              </form>
            </article>

            <aside className="space-y-4">
              <article className="rounded-2xl bg-[#11284a] p-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f4c64f]">Move Faster</p>
                <h2 className="mt-2 text-xl font-bold">Book a Consultation</h2>
                <p className="mt-2 text-sm text-slate-200">
                  Skip the form and reserve time directly for a focused conversation about your goals.
                </p>
                <Link
                  href="/book-online"
                  className="mt-4 inline-flex rounded-full bg-[#f4c64f] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#111827] transition hover:bg-[#f7ce62]"
                >
                  Schedule Now
                </Link>
              </article>

              <article className="rounded-2xl border border-[#cfd9f2] bg-[#edf3ff] p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#11284a]">Who Should Reach Out</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {whoShouldReachOut.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-[#cfd9f2] bg-[#edf3ff] p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#11284a]">Direct Contact</h3>
                <div className="mt-3 space-y-3 text-sm">
                  <p className="text-slate-600">
                    Email:{" "}
                    <a className="font-semibold text-[#11284a] hover:text-emerald-700" href="mailto:preeminencepros@gmail.com">
                      preeminencepros@gmail.com
                    </a>
                  </p>
                  <p className="text-slate-600">
                    Phone:{" "}
                    <a className="font-semibold text-[#11284a] hover:text-emerald-700" href="tel:+17185411107">
                      (718) 541-1107
                    </a>
                  </p>
                  <p className="text-slate-600">Service area: Nationwide (virtual and in-person)</p>
                </div>
                <div className="mt-4 flex items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-[#cfd9f2] bg-white p-2 transition hover:-translate-y-0.5"
                      aria-label={`Visit Preeminence on ${social.label}`}
                    >
                      <Image src={social.icon} alt={`${social.label} logo`} width={28} height={28} />
                    </a>
                  ))}
                </div>
              </article>
            </aside>
          </div>

          <section className="border-t border-[#cfd9f2] bg-[#edf3ff] px-6 py-8 md:px-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Stay Connected</p>
                <h2 className="mt-2 text-3xl font-bold text-[#11284a]">Join Our Community of Program Builders</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                  Resources, insights, and opportunities delivered to leaders committed to building stronger programs
                  and systems.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {mailingListBenefits.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <article className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#11284a]">Join Our Mailing List</h3>
                <form className="mt-4 space-y-3" aria-label="Mailing list subscription form">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    className="w-full rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm"
                  />
                  <label className="flex items-start gap-2 text-xs text-slate-600">
                    <input type="checkbox" required className="mt-0.5" />
                    <span>I agree to receive updates and communications from Preeminence Professional Consulting Agency.</span>
                  </label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="rounded-full bg-[#f4c64f] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#111827] transition hover:bg-[#f7ce62]"
                    >
                      Subscribe
                    </button>
                    <Link
                      href="/contact/subscriptions"
                      className="rounded-full border border-[#11284a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#11284a] transition hover:bg-[#e3ebfb]"
                    >
                      Full Subscriptions Page
                    </Link>
                  </div>
                </form>
              </article>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
