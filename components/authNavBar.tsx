"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {buttonVariants} from "@/components/ui/button"
import {cn} from "@/lib/utils"


const navItems = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Security", href: "/security" },
  { label: "Support", href: "/support" },
];

const hiddenPaths = new Set(["/login", "/register", "/dashboard"]);

const AuthNavBar = () => {
  const pathname = usePathname();

  if (hiddenPaths.has(pathname)) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="S Banking home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
            S
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-slate-900">S Banking</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Smart banking</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(buttonVariants({variant:"link"}),"hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex")}
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-blue-700 sm:px-5"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AuthNavBar;