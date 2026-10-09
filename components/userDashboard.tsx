'use client'
import Link from "next/link";
import { logOut } from "@/actions/auth";
import {
  AccountType,
  AccountStatus,
  Role,
} from "@/lib/generated/prisma/enums";
import {Button} from "@/components/ui/button"


const balance = "$24,680.42";
const income = "$3,240.00";
const expenses = "$1,860.25";

const quickActions = [
  { label: "Add money", icon: "＋", color: "bg-blue-600" },
  { label: "Transfer", icon: "⇄", color: "bg-violet-600" },
  { label: "Pay bill", icon: "◌", color: "bg-emerald-600" },
  { label: "Cards", icon: "◫", color: "bg-slate-800" },
];

const transactions = [
  { name: "Salary deposit", detail: "Today, 9:42 AM", amount: "+$2,400.00", positive: true },
  { name: "Groceries", detail: "Yesterday", amount: "-$128.40", positive: false },
  { name: "Rent", detail: "Mon, 2 Aug", amount: "-$1,200.00", positive: false },
  { name: "Freelance project", detail: "Fri, 30 Jul", amount: "+$640.00", positive: true },
];

const goals = [
  { name: "Emergency fund", progress: 72, amount: "$7,200 / $10,000", color: "bg-blue-600" },
  { name: "Travel", progress: 46, amount: "$2,300 / $5,000", color: "bg-violet-600" },
];

const cards = [
  { number: "•••• 4827", balance: "$14,250.20", holder: "A. Smith", color: "from-blue-600 via-indigo-600 to-violet-700" },
  { number: "•••• 2048", balance: "$10,430.22", holder: "A. Smith", color: "from-emerald-600 via-teal-600 to-cyan-700" },
];




type User = {
  id: number;
  email: string;
  role?: Role;
  createdAt: Date;
  updatedAt: Date;

  profile: {
    id: number;
    firstName: string;
    lastName: string;
    phone: string | null;
    userId: number;
  } | null;

  accounts: {
    id: number;
    accountNumber: string;
    balance: string;
    type: AccountType;
    status: AccountStatus;
    createdAt: Date;
    userId: number;
  }[];
};


export default function UserDashboard({id,email,accounts,profile,role,createdAt,updatedAt}:User) {
    
    console.log(accounts.length)

    const {balance,accountNumber,type}=accounts[0]
  
    return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-400">Good morning</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{profile?.firstName}, welcome back</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="destructive" className="cursor-pointer font-bold" onClick={()=> logOut()}>
              Log Out
            </Button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:bg-white/10">
              🔔 
            </button>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 font-semibold text-white">
                {profile?.firstName[0].toUpperCase()}{profile?.lastName[0].toUpperCase()}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold">{profile?.firstName} {profile?.lastName}</p>
                <p className="text-xs text-slate-400">{type}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-8 space-y-8">
          <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 shadow-2xl shadow-blue-950/40 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-blue-100">Available balance</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">${balance.toString()}</p>
                </div>
                <button className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15">
                  View account
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-white/15 pt-5 text-sm">
                <div>
                  <p className="text-blue-100">Income</p>
                  <p className="mt-1 font-semibold text-white">{income}</p>
                </div>
                <div>
                  <p className="text-blue-100">Expenses</p>
                  <p className="mt-1 font-semibold text-white">{expenses}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm text-slate-400">Monthly overview</p>
              <div className="mt-5 flex items-end gap-2">
                {[35, 58, 44, 78, 62, 88, 72].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-500 to-violet-400" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="mt-5 flex justify-between text-xs text-slate-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Quick actions</h2>
                  <span className="text-xs text-slate-400">Banking</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button key={action.label} className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-left transition hover:border-white/20 hover:bg-slate-800">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white ${action.color}`}>
                        {action.icon}
                      </span>
                      <span className="mt-4 block text-sm font-medium text-slate-200">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Savings goals</h2>
                  <Link href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">View all</Link>
                </div>

                <div className="mt-5 space-y-5">
                  {goals.map((goal) => (
                    <div key={goal.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-200">{goal.name}</span>
                        <span className="text-slate-400">{goal.amount}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                        <div className={`h-full rounded-full ${goal.color}`} style={{ width: `${goal.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">My cards</h2>
                  <button className="text-sm font-medium text-blue-400 hover:text-blue-300">Manage</button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {cards.map((card) => (
                    <article key={card.number} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} p-5 shadow-xl`}>
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
                      <div className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-white/10" />
                      <div className="relative flex h-full min-h-40 flex-col">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold">S</span>
                          <span className="text-xs uppercase tracking-[0.2em] text-blue-100">Visa</span>
                        </div>
                        <div className="mt-auto">
                          <p className="text-sm text-blue-100">{card.number}</p>
                          <div className="mt-4 flex items-end justify-between">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100">Card holder</p>
                              <p className="mt-1 text-sm font-semibold">{card.holder}</p>
                            </div>
                            <p className="text-sm font-semibold">{card.balance}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Recent activity</h2>
                  <Link href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300">See all</Link>
                </div>

                <div className="mt-5 space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.name} className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${transaction.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
                          {transaction.positive ? "↑" : "↓"}
                        </span>
                        <div>
                          <p className="font-medium text-slate-100">{transaction.name}</p>
                          <p className="text-xs text-slate-400">{transaction.detail}</p>
                        </div>
                      </div>
                      <p className={`font-semibold ${transaction.positive ? "text-emerald-400" : "text-slate-200"}`}>
                        {transaction.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
