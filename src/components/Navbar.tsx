"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  aboutLinks,
  contactBookLinks,
  corporateInstitutionLinks,
  programsLinks,
  resourcesLinks,
  type NavItem,
} from "@/lib/site-data";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${className}`}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      className={`hover-lift rounded-full px-3 py-1.5 text-[13px] font-bold transition duration-200 hover:bg-[#f4f7ff]/85 hover:text-red-700 ${
        isActive ? "text-emerald-700" : "text-red-700"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function DesktopDropdown({ label, href, items }: { label: string; href: string; items: NavItem[] }) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <div className="group relative">
      <Link
        href={href}
        className={`hover-lift flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-bold transition duration-200 hover:bg-[#f4f7ff]/85 hover:text-red-700 ${
          isActive ? "text-emerald-700" : "text-red-700"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        <ChevronDownIcon className="group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>

      <div className="invisible absolute left-0 top-full z-50 w-96 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="animate-scale-in rounded-2xl border border-[#11284a]/15 bg-[#f4f7ff]/95 p-2 shadow-2xl backdrop-blur-xl">
          {items.map((item) => {
            const itemActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-sm transition hover:bg-[#eef4ff] ${
                  itemActive ? "font-bold text-emerald-700" : "text-slate-900"
                }`}
                aria-current={itemActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ label, href, items }: { label: string; href: string; items: NavItem[] }) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <details className="group">
      <summary
        className={`flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 text-sm font-bold transition hover:bg-[#e3ebfb] ${
          isActive ? "text-emerald-700" : "text-red-700"
        }`}
      >
        <span>{label}</span>
        <ChevronDownIcon className="group-open:rotate-180" />
      </summary>
      <div className="mt-1 space-y-1 pl-4">
        <Link
          href={href}
          className={`block rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[#e3ebfb] ${
            isActive ? "text-emerald-700" : "text-slate-900"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          View {label}
        </Link>
        {items.map((item) => {
          const itemActive = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-[#e3ebfb] ${
                itemActive ? "font-bold text-emerald-700" : "text-slate-900"
              }`}
              aria-current={itemActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </details>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-2 z-50 mx-auto w-[96%] max-w-7xl animate-fade-up">
      <nav className="animate-gradient-pan relative overflow-visible rounded-[2.1rem] border border-[#11284a]/15 bg-[#edf3ff]/88 px-4 py-1.5 text-[#11284a] shadow-lg shadow-slate-300/25 backdrop-blur-xl [animation-duration:16s] md:px-6 md:py-2">
        <div className="pointer-events-none absolute inset-0 rounded-[2.1rem] bg-gradient-to-r from-white/35 via-white/5 to-white/35 opacity-50" />

        <div className="relative flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center self-center">
            <Image
              src="/images/ppca-logo-transparent.png"
              alt="Preeminence Professional Consulting Agency logo"
              width={230}
              height={107}
              className="h-[2.9rem] w-auto object-contain object-center md:h-[3.4rem]"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <DesktopLink href="/" label="Home" />
            <DesktopDropdown label="About" href="/about-us" items={aboutLinks} />
            <DesktopLink href="/services" label="Services" />
            <DesktopDropdown label="Programs" href="/programs" items={programsLinks} />
            <DesktopDropdown label="Corporate/Institutions" href="/corporate-institutions" items={corporateInstitutionLinks} />
            <DesktopDropdown label="Resources" href="/resources" items={resourcesLinks} />
            <DesktopDropdown label="Contact/Book" href="/contact" items={contactBookLinks} />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/book-online"
              className="animate-pulse-glow hover-lift shine-surface magnetic-cta inline-flex rounded-full bg-[#f4c64f] px-5 py-2 text-sm font-extrabold text-[#111827] ring-2 ring-[#f7d982] transition hover:bg-[#f7ce62]"
            >
              Book Online
            </Link>
            <button
              type="button"
              className="hover-lift inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c2cfe9] bg-[#edf3ff]/90 text-slate-700 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d="M4 6H16M4 10H16M4 14H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="animate-scale-in relative mt-3 rounded-2xl border border-[#cfd9f2] bg-[#edf3ff]/95 p-3 shadow-xl lg:hidden">
            <div className="space-y-1">
              <DesktopLink href="/" label="Home" />
              <MobileDropdown label="About" href="/about-us" items={aboutLinks} />
              <DesktopLink href="/services" label="Services" />
              <MobileDropdown label="Programs" href="/programs" items={programsLinks} />
              <MobileDropdown label="Corporate/Institutions" href="/corporate-institutions" items={corporateInstitutionLinks} />
              <MobileDropdown label="Resources" href="/resources" items={resourcesLinks} />
              <MobileDropdown label="Contact/Book" href="/contact" items={contactBookLinks} />
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
