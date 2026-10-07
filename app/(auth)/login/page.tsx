import React from "react";
import Link from "next/link";
import LoginUser from "@/components/loginUser";

const page = () => {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              Welcome back
            </span>
            <h1 className="mt-8 max-w-sm text-4xl font-bold tracking-tight">
              Access your account and continue your journey.
            </h1>
            <p className="mt-4 max-w-md text-base leading-7 text-blue-100">
              Manage your profile, stay connected, and pick up where you left off.
            </p>
          </div>

          <div className="relative grid gap-3 text-sm text-blue-50">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-indigo-700">✓</span>
              Secure sign-in
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-indigo-900">⚡</span>
              Fast, simple access
            </div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-10 lg:p-12">
          <div className="mb-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">
              S
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sign in
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your details to access your account.
            </p>
          </div>

          <LoginUser />

          <p className="mt-8 text-center text-sm text-slate-500">
            New here?{" "}
            <Link href="/register" className="font-semibold text-blue-600 transition-colors hover:text-blue-700">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;