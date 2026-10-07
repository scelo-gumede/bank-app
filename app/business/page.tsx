import Link from "next/link";

const features = [
  ["Business accounts", "Keep personal and business finances separated with dedicated controls."],
  ["Payment tools", "Send invoices, process payments, and manage cash flow efficiently."],
  ["Business insights", "Monitor revenue, expenses, and account activity with clear reporting."],
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Business banking</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Power your next stage of growth.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Manage your business finances with secure accounts, practical tools, and clear visibility into every payment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Apply today</Link>
              <Link href="/support" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Talk to support</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-6">
              <p className="text-sm text-cyan-100">Business balance</p>
              <p className="mt-3 text-4xl font-bold">$84,260.15</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">Revenue</p>
                  <p className="mt-2 text-xl font-semibold">$21,450</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">Expenses</p>
                  <p className="mt-2 text-xl font-semibold">$8,940</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Built for business</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Tools that keep operations moving.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-2xl text-cyan-400">✦</span>
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
