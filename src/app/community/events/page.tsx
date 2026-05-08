import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { events } from "@/lib/legacy-content";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Upcoming Events</h1>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
              <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                <Image
                  src={event.image}
                  alt={`${event.title} event visual`}
                  width={1200}
                  height={760}
                  className="h-auto w-full"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-700">{event.type}</p>
                <h2 className="mt-2 text-xl font-bold text-[#11284a]">{event.title}</h2>
                <p className="mt-3 text-sm font-semibold text-slate-600">{event.date}</p>
                <p className="text-sm text-slate-600">{event.location}</p>
                <p className="mt-3 text-sm text-slate-600">{event.summary}</p>
                <div className="mt-4 flex gap-3">
                  <button className="magnetic-cta rounded-full border border-[#11284a] px-3 py-1 text-xs font-bold text-[#11284a]">More info</button>
                  <button className="magnetic-cta rounded-full bg-[#f4c64f] px-3 py-1 text-xs font-bold text-[#111827]">Details</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
