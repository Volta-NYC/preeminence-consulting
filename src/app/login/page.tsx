import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-16 md:px-8">
        <section className="mx-auto w-full max-w-lg rounded-3xl border border-[#cfd9f2] bg-[#f4f8ff] p-8 shadow-md">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#11284a]">Account Access</p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#11284a]">Log In</h1>
          <p className="mt-4 text-slate-600">
            This is a placeholder login page. Authentication functionality will be implemented in a later phase.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#11284a]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#11284a]">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#d4ddf1] bg-white/90 px-4 py-3 text-sm text-slate-500 outline-none"
              />
            </div>
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-xl bg-[#f4c64f] px-4 py-3 text-sm font-extrabold text-[#111827] opacity-75"
            >
              Log In (Coming Soon)
            </button>
            <Link
              href="/create-account?from=login"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#11284a] bg-white px-4 py-3 text-sm font-bold text-[#11284a] transition hover:border-emerald-700 hover:text-emerald-700"
            >
              Create Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
