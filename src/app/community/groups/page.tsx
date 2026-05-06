import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { groups } from "@/lib/legacy-content";
import { wixMedia } from "@/lib/wix-media";

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-[#eaf0ff] text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <h1 className="text-4xl font-extrabold text-[#11284a] md:text-5xl">Groups</h1>
        <p className="mt-4 text-slate-600">View groups and posts below.</p>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
            <Image
              src={wixMedia("8cc4ec_900d0f1a6d4048ec88c4b47e67eb27c9~mv2.jpg", 1000, 620)}
              alt="Community group collaboration visual"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-[#cfd9f2] bg-[#f4f7ff] shadow-md">
            <Image
              src={wixMedia("8cc4ec_0d21eab1d23543e8af984cdbbf60f0da~mv2.png", 1000, 620)}
              alt="Preeminence impact group membership visual"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </section>

        <section className="mt-10 space-y-4">
          {groups.map((group) => (
            <article key={group.name} className="rounded-2xl border border-[#cfd9f2] bg-[#f4f7ff] p-5 shadow-sm">
              <h2 className="text-xl font-bold text-[#11284a]">{group.name}</h2>
              <p className="mt-2 text-sm text-slate-600">
                {group.type} - {group.members}
              </p>
              <button className="mt-4 rounded-full bg-[#f4c64f] px-4 py-2 text-xs font-bold text-[#111827] transition hover:bg-[#f7ce62]">
                {group.action}
              </button>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
