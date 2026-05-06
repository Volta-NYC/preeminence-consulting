import Image from "next/image";
import Link from "next/link";
import { communityLinks, serviceLinks, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#cfd9f2] bg-[#f4f7ff] text-slate-800">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Image
            src="/images/ppca-logo-transparent.png"
            alt="Preeminence Professional Consulting Agency logo"
            width={270}
            height={126}
            className="h-auto w-[180px]"
          />
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Preeminence Professional Consulting Agency delivers strategic support for schools, organizations, and
            growing teams.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We build curriculum, training systems, and leadership frameworks that produce measurable outcomes.
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-105"
                aria-label={`Visit Preeminence on ${social.label}`}
              >
                <Image src={social.icon} alt={`${social.label} logo`} width={28} height={28} className="rounded-full" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#11284a]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="transition hover:text-emerald-700" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="transition hover:text-emerald-700" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <Link className="transition hover:text-emerald-700" href="/instant-access-downloads">
                Instant Access Downloads
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-emerald-700" href="/instant-access-downloads/member-library">
                Member Download Library
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-emerald-700" href="/book-online">
                Book Online
              </Link>
            </li>
          </ul>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Services</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link className="transition hover:text-emerald-700" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#11284a]">Contact Information</h3>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            <p>
              Email:{" "}
              <a className="font-semibold text-[#11284a] transition hover:text-emerald-700" href="mailto:preeminencepros@gmail.com">
                preeminencepros@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="font-semibold text-[#11284a] transition hover:text-emerald-700" href="tel:+17185411107">
                (718) 541-1107
              </a>
            </p>
          </div>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#11284a]">Community</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            {communityLinks.map((item) => (
              <li key={item.label}>
                <Link className="transition hover:text-emerald-700" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#11284a]">Join The Mailing List</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Get updates on workshops, events, academy openings, and exclusive resources.
          </p>
          <form className="mt-4 space-y-2.5" aria-label="Mailing list subscription form">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-[#cfd9f2] bg-[#eaf0ff] px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#11284a] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a3a64]"
            >
              Subscribe To Mailing List
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#cfd9f2] py-3 text-center text-xs text-slate-500">
        (c)2026 Preeminence Professional Consulting Agency
      </div>
    </footer>
  );
}
