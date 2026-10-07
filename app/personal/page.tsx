import Link from "next/link";

const benefits = [
  ["Smart budgeting", "Track spending, set goals, and build healthy financial habits."],
  ["Real-time insights", "See balances and activity updates when they matter most."],
  ["Flexible access", "Bank securely from your phone, tablet, or desktop."],
];

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Personal banking</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Banking that feels effortless.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Everything you need to manage everyday life, protect your money, and move forward with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-100">Open an account</Link>
              <Link href="/login" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Sign in</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 shadow-2xl shadow-blue-950/40">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Available balance</p>
                <p className="mt-3 text-3xl font-bold">$24,680.42</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Monthly budget</p>
                <p className="mt-3 text-3xl font-bold">$3,200</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                <p className="text-sm text-blue-100">Smart spending</p>
                <p className="mt-3 text-2xl font-semibold">You saved 12% this month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Why customers choose us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Made for everyday financial clarity.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-2xl text-blue-400">✓</span>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
