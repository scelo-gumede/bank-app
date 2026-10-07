import Link from "next/link";

const featureCards = [
  {
    icon: "◌",
    title: "Smart spending",
    description: "See your money clearly with real-time insights and personalized budgeting.",
  },
  {
    icon: "⇄",
    title: "Fast transfers",
    description: "Send money securely to friends, family, and businesses in seconds.",
  },
  {
    icon: "✓",
    title: "Bank-grade security",
    description: "Protect your account with encrypted transactions and secure access controls.",
  },
];

const stats = [
  { value: "24/7", label: "Account access" },
  { value: "3 min", label: "Average onboarding" },
  { value: "99.9%", label: "Platform reliability" },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Your finances, simplified
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Banking built for
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent"> life today.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Manage spending, save smarter, and move money securely from one beautifully simple experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
                >
                  Open an account
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Sign in
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-400/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 sm:p-7">
                  <div className="flex items-center justify-between text-sm text-blue-100">
                    <span>Primary account</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1">Active</span>
                  </div>

                  <p className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-5xl">$24,680.42</p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-sm text-blue-100">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Card holder</p>
                      <p className="mt-1 font-semibold text-white">Alex Smith</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Account</p>
                      <p className="mt-1 font-semibold text-white">•••• 4827</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Income", "+$3,240"],
                    ["Savings", "$8,540"],
                    ["Expenses", "$1,860"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="personal" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Everything you need</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">A smarter way to bank</h2>
            <p className="mt-4 text-lg text-slate-400">From spending insights to secure transfers, every feature is designed around your goals.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-xl text-blue-300">
                  {feature.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">Built for trust</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Security that keeps pace with your life</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
              We protect every transaction with industry-standard encryption, proactive monitoring, and a secure, frictionless login experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Multi-layer security", "Protect your account with encrypted access and transaction verification."],
              ["Instant alerts", "Receive timely notifications for every payment and account activity."],
              ["Fraud monitoring", "Stay ahead of unusual activity with automated protection tools."],
              ["Private by design", "Control who can view or access your personal banking information."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-lg text-emerald-400">✓</span>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-white/10 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Start today</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Your next financial move starts here.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Open an account, explore your dashboard, and take control of your financial future.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Create your account
            </Link>
            <Link href="/login" className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">
              Already a customer?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
