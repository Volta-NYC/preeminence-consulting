import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preeminence Professional Consulting Agency",
  description:
    "Consulting services, academies, and community impact programs by Preeminence Professional Consulting Agency.",
  icons: {
    icon: [
      { url: "/images/ppca-navicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/ppca-navicon.png",
    apple: "/images/ppca-navicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative min-h-full overflow-x-hidden bg-[#e6efff] text-slate-900 antialiased">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
          <div className="islamic-geometry-pattern absolute inset-0 opacity-[0.46]" />
          <div className="islamic-geometry-pattern absolute inset-[-12%] opacity-[0.22] mix-blend-multiply" />
          <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f4c64f]/18 blur-3xl" />
          <div className="animate-float-reverse absolute right-[-5rem] top-1/3 h-96 w-96 rounded-full bg-[#c8ddff]/35 blur-3xl" />
          <div className="animate-float-slow absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-[#d7e5ff]/40 blur-3xl" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
