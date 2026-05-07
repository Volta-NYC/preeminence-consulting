import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { aboutCopy } from "@/lib/legacy-content";
import { communityLinks, serviceLinks, socialLinks } from "@/lib/site-data";
import { wixMedia } from "@/lib/wix-media";

const coreValues = [
  {
    title: "Holistic Inclusivity",
    description:
      "Embrace a broad understanding of diversity, encompassing race, ethnicity, culture, socio-economic status, gender, age, and abilities.",
  },
  {
    title: "Empowerment Through Knowledge",
    description: "Champion tailored educational experiences that inspire growth and unlock potential.",
  },
  {
    title: "Entrepreneurial Drive",
    description: "Foster risk-taking, innovation, and determination to turn visions into ventures.",
  },
  {
    title: "Championing Social Justice",
    description: "Address systemic inequalities and provide avenues for marginalized communities to rise and lead.",
  },
  {
    title: "Local Impact, Global Vision",
    description: "Prioritize local needs while aligning with global standards and best practices.",
  },
  {
    title: "Integrity in Action",
    description: "Commit to transparency and accountability in every interaction.",
  },
  {
    title: "Partnership and Collaboration",
    description: "Build synergistic relationships with schools, communities, and industry experts.",
  },
  {
    title: "Continuous Improvement",
    description: "Stay current, seek feedback, and continuously strengthen outcomes.",
  },
];

const homeGalleryImages = [
  {
    src: "/images/home/workshop-session.jpg",
    alt: "Dr. Fuller leading a professional workshop with attendees in a classroom setting",
    width: 1440,
    height: 1440,
    label: "Live Workshop Facilitation",
    imageClass: "object-center",
  },
  {
    src: "/images/home/community-book-group.jpg",
    alt: "Community members holding copies of Consequential Correspondence at an event",
    width: 2047,
    height: 1366,
    label: "Community Book Engagement",
    imageClass: "object-center",
  },
  {
    src: "/images/home/founder-group-portrait.jpg",
    alt: "Dr. Fuller with partners and supporters at a professional networking event",
    width: 2048,
    height: 1365,
    label: "Leadership Network Building",
    imageClass: "object-center",
  },
  {
    src: "/images/home/founder-book-portrait.jpg",
    alt: "Dr. Fuller presenting her book Consequential Correspondence",
    width: 1366,
    height: 2047,
    label: "Founder Publication Spotlight",
    imageClass: "object-top",
  },
];

const socialCardThemes: Record<string, string> = {
  Instagram: "border-pink-300 bg-pink-50",
  Facebook: "border-blue-300 bg-blue-50",
  LinkedIn: "border-sky-300 bg-sky-50",
};

function CoreValueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3L14.6 8.2L20.3 9L16.1 13.1L17.1 18.9L12 16.1L6.9 18.9L7.9 13.1L3.7 9L9.4 8.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e6efff] text-slate-800">
      <Navbar />
      <main className="relative z-10">
        <section id="home" className="relative isolate overflow-hidden border-b border-[#cfd9f2]">
          <Image
            src="/images/home/workshop-session.jpg"
            alt="Dr. Fuller presenting to a professional audience during a learning session"
            fill
            priority
            className="object-cover"
          />
          <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-r from-[#0b172d]/75 via-[#11284a]/55 to-[#0b172d]/70" />
          <div className="animate-float-slow absolute -left-10 top-10 h-48 w-48 rounded-full bg-[#f4c64f]/30 blur-3xl" />
          <div className="animate-float-reverse absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#dbeafe]/40 blur-3xl" />
          <div className="animate-float-slow absolute bottom-12 right-20 h-36 w-36 rounded-full bg-[#fde68a]/35 blur-3xl" />

          <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-4 py-24 md:px-8">
            <div className="max-w-3xl animate-fade-left">
              <p className="animate-scale-in mb-4 inline-flex rounded-full border border-[#f4c64f]/70 bg-[#f4c64f]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#fff7df]">
                Preeminence Professional Consulting Agency
              </p>
              <h1 className="headline-animated animate-fade-up-delay-1 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Transforming Organizations Through Expert Consulting
              </h1>
              <p className="typed-tagline mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#fde8a5] md:text-sm">
                Build with structure. Scale with impact.
              </p>
              <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base text-slate-100 md:text-lg">
                {aboutCopy.intro[0]} {aboutCopy.intro[1]}
              </p>
              <Link
                href="/services"
                className="animate-pulse-glow hover-lift shine-surface magnetic-cta mt-8 inline-flex rounded-full bg-[#f4c64f] px-6 py-3 text-sm font-extrabold text-[#111827] ring-2 ring-[#fde8a5] transition hover:bg-[#f7ce62]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-px text-[#e9f1ff]">
            <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="h-16 w-full md:h-20">
              <path
                fill="currentColor"
                d="M0,128L60,122.7C120,117,240,107,360,112C480,117,600,139,720,144C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,181L1380,181C1320,181,1200,181,1080,181C960,181,840,181,720,181C600,181,480,181,360,181C240,181,120,181,60,181L0,181Z"
              />
            </svg>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[#cfd9f2]">
          <div aria-hidden="true" className="islamic-geometry-pattern pointer-events-none absolute inset-0 opacity-35" />
          <div className="relative">
            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
              <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Featured Moments</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Real experiences from workshops, publications, and community events led by Preeminence.
              </p>
              <div className="stagger-children mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
                {homeGalleryImages.map((image, index) => (
                  <article
                    key={image.label}
                    className="hover-lift hover-tilt shine-surface overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] shadow-md"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="group relative aspect-[16/11]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover transition duration-500 group-hover:scale-105 ${image.imageClass}`}
                      />
                    </div>
                    <div className="border-t border-[#cfd9f2] bg-[#f4f7ff] px-4 py-3">
                      <p className="text-sm font-semibold text-[#11284a]">{image.label}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-8">
              <div className="stagger-children grid grid-cols-1 gap-6 md:grid-cols-2">
                <article className="hover-lift shine-surface pulse-border animate-fade-left rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-7 shadow-md">
                  <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Our Mission</h2>
                  <p className="mt-4 text-slate-600">{aboutCopy.intro[1]}</p>
                </article>
                <article
                  className="hover-lift shine-surface pulse-border animate-fade-right rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-7 shadow-md"
                  style={{ animationDelay: "120ms" }}
                >
                  <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Our Vision</h2>
                  <p className="mt-4 text-slate-600">{aboutCopy.intro[2]}</p>
                </article>
              </div>
            </section>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-14 md:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr]">
            <article className="overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] shadow-md">
              <div className="group relative aspect-[4/3]">
                <Image
                  src={wixMedia("8cc4ec_bb3d9994b8504df7937d75964bd2a872~mv2.avif", 760, 1240)}
                  alt="Dr. Anesha Fuller founder portrait"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 object-top"
                />
              </div>
            </article>
            <article className="rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] p-7 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#11284a]">Founder Spotlight</p>
              <h2 className="headline-animated mt-3 text-3xl font-bold text-[#11284a]">{aboutCopy.founderName}</h2>
              <p className="mt-2 text-base font-semibold text-emerald-700">{aboutCopy.founderRole}</p>
              <p className="mt-4 text-slate-600">{aboutCopy.workImpact}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {aboutCopy.founderFocus.slice(0, 4).map((focus) => (
                  <li key={focus} className="flex gap-2">
                    <span className="mt-[9px] h-[2px] w-2.5 shrink-0 bg-[#f4c64f]" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="magnetic-cta mt-6 inline-flex rounded-full bg-[#11284a] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a3a64]"
              >
                Learn More About Our Founder
              </Link>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
          <div className="shine-surface animate-fade-up rounded-3xl border border-[#cfd9f2] bg-[#edf3ff] p-8 shadow-md">
            <h2 className="headline-animated text-center text-3xl font-bold text-[#11284a]">Connect With Us</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">
              Stay connected and receive updates on our work, upcoming events, and opportunities by following our
              official platforms.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`hover-lift hover-tilt shine-surface animate-scale-in group flex flex-col items-center gap-3 rounded-2xl border px-8 py-5 text-center transition hover:border-[#f4c64f] hover:shadow-md ${
                    socialCardThemes[social.label] ?? "border-[#cfd9f2] bg-[#e6efff]"
                  }`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <Image src={social.icon} alt={`${social.label} platform logo`} width={58} height={58} className="animate-wiggle-soft rounded-full" />
                  <span className="text-base font-bold text-[#11284a] group-hover:text-emerald-700">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden border-y border-[#cfd9f2] bg-[#e9f1ff] py-16">
          <div aria-hidden="true" className="animate-float-slow absolute -top-10 left-1/3 h-40 w-40 rounded-full bg-[#f4c64f]/20 blur-3xl" />
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Services &amp; Academies</h2>
            <div className="stagger-children mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover-lift shine-surface magnetic-cta rounded-xl border border-[#cfd9f2] bg-[#eaf0ff] px-4 py-3 font-semibold text-slate-700 transition hover:border-[#f4c64f] hover:text-[#11284a]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
          <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Core Values</h2>
          <div className="stagger-children mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className="hover-lift hover-tilt shine-surface group rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5 shadow-sm transition hover:shadow-md"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="animate-wiggle-soft mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c64f] text-sm font-extrabold text-[#111827]">
                  <CoreValueIcon />
                </div>
                <h3 className="text-lg font-bold text-[#11284a]">{value.title}</h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-slate-600 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="community" className="relative overflow-hidden bg-[#dce8ff] py-16">
          <div aria-hidden="true" className="animate-float-reverse absolute -right-10 bottom-3 h-44 w-44 rounded-full bg-[#f4c64f]/25 blur-3xl" />
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <h2 className="headline-animated text-3xl font-bold text-[#11284a]">Community</h2>
            <div className="stagger-children mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {communityLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover-lift shine-surface magnetic-cta rounded-xl border border-[#cfd9f2] bg-[#f4f7ff] px-4 py-3 font-semibold text-slate-700 transition hover:border-[#f4c64f] hover:text-[#11284a]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
