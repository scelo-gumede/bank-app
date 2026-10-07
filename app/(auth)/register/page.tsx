import React from "react";
import Link from "next/link";
import CreateUser from "@/components/createUser";

const page = () => {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-slate-950/40 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-white p-6 sm:p-10 lg:p-12">
          <div className="mb-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold text-violet-700">
              S
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Create account
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Get started today
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Join in just a few easy steps and unlock your personalized experience.
            </p>
          </div>

          <CreateUser />

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-violet-600 transition-colors hover:text-violet-700">
              Sign in
            </Link>
          </p>
        </div>

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-blue-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              Your account starts here
            </span>
            <h1 className="mt-8 max-w-sm text-4xl font-bold tracking-tight">
              Create a profile that works for you.
            </h1>
            <p className="mt-4 max-w-md text-base leading-7 text-violet-100">
              Set up your account, personalize your experience, and access everything you need from one place.
            </p>
          </div>

          <div className="relative grid gap-3 text-sm text-violet-50">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-violet-700">1</span>
              Create your account
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-violet-900">2</span>
              Personalize your experience
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;