import Link from "next/link";

const supportItems = [
  ["Account help", "Get assistance with sign-in, passwords, and account access."],
  ["Payments", "Resolve questions about transfers, bills, and scheduled payments."],
  ["Card support", "Manage card settings, replacements, and transaction disputes."],
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">Support</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">We’re here when you need us.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Find answers, contact our team, or get help with your account quickly and easily.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/login" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100">Manage account</Link>
            <Link href="/register" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Create account</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">How we can help</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Support for every part of your banking journey.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportItems.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-2xl text-violet-400">✦</span>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-8 text-center shadow-2xl shadow-violet-950/30 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-100">Need immediate help?</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Contact our support team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-violet-100">Call +1 (800) 555-0199 or email support@sbanking.example for assistance.</p>
        </div>
      </section>
    </main>
  );
}
