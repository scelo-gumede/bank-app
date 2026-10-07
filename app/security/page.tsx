import Link from "next/link";

const protections = [
  ["Two-layer protection", "Secure your account with strong credentials and trusted verification."],
  ["Continuous monitoring", "We review activity for unusual behavior and suspicious transactions."],
  ["Encrypted data", "Your information is protected with modern encryption in transit and at rest."],
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Security</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Protection designed around your peace of mind.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Security should be simple, reliable, and always working behind the scenes while you bank with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Create secure account</Link>
              <Link href="/login" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Review account</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-slate-900 p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-slate-400">Account status</p>
                <p className="mt-1 text-xl font-semibold text-white">Protected</p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-300">✓</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Secure login", "Verified"],
                ["Transaction alerts", "Enabled"],
                ["Fraud monitoring", "Active"],
                ["Private data", "Encrypted"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">How we protect you</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Security built into every step.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {protections.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-2xl text-emerald-400">●</span>
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
