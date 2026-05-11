import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type CreateAccountPageProps = {
  searchParams: Promise<{
    from?: string;
  }>;
};

export default async function CreateAccountPage({ searchParams }: CreateAccountPageProps) {
  const params = await searchParams;

  if (params.from !== "login") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-16 md:px-8">
        <section className="mx-auto w-full max-w-xl rounded-3xl border border-[#cfd9f2] bg-[#f4f8ff] p-8 shadow-md">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#11284a]">New Account</p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#11284a]">Create Account</h1>
          <p className="mt-4 text-slate-600">
            This is a placeholder create-account page. Account creation functionality will be implemented in a later phase.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="first-name" className="mb-2 block text-sm font-semibold text-[#11284a]">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="last-name" className="mb-2 block text-sm font-semibold text-[#11284a]">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="create-email" className="mb-2 block text-sm font-semibold text-[#11284a]">
                Email
              </label>
              <input
                id="create-email"
                type="email"
                placeholder="name@example.com"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="create-password" className="mb-2 block text-sm font-semibold text-[#11284a]">
                Password
              </label>
              <input
                id="create-password"
                type="password"
                placeholder="••••••••"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <button
              type="button"
              disabled
              className="md:col-span-2 w-full cursor-not-allowed rounded-xl bg-[#f4c64f] px-4 py-3 text-sm font-extrabold text-[#111827] opacity-75"
            >
              Create Account (Coming Soon)
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
