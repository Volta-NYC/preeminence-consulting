import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { events } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

const eventImages = [
  wixMedia("8cc4ec_a62a1617e7e742cf9b8ccef1d0051d42~mv2.png", 1200, 760),
  wixMedia("8cc4ec_ace15997f79c4220a123ad27b8b5f285~mv2.jpeg", 1200, 760),
  wixMedia("8cc4ec_e2327a37344c45c292ba96b0cbae0c28~mv2.jpeg", 1200, 760),
  wixMedia("8cc4ec_f74e402c7c4a498d87d2241e39f37b0c~mv2.jpg", 1200, 760),
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Upcoming Events</h1>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <article key={event.title} className="overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
              <div className="border-b border-[#cfd9f2] bg-[#eaf0ff]">
                <Image
                  src={eventImages[index % eventImages.length]}
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
