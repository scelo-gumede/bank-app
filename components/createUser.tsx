"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUser } from "@/actions/auth";
import { RegisterSchema, registerSchema } from "@/types/user";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      accountType: "SAVINGS",
      openingBalance: 0,
    },
  });

  async function onSubmit(data: RegisterSchema) {
    const result = await createUser(data);

    if (!result.success) {
      setError("root", {
        type: "server",
        message: result.message,
      });
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            {...register("firstName")}
            id="firstName"
            autoComplete="given-name"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
            placeholder="Alex"
            aria-invalid={Boolean(errors.firstName)}
          />
          <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.firstName?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            {...register("lastName")}
            id="lastName"
            autoComplete="family-name"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
            placeholder="Smith"
            aria-invalid={Boolean(errors.lastName)}
          />
          <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.lastName?.message}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.email?.message}</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone number
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
          placeholder="+1 555 123 4567"
          aria-invalid={Boolean(errors.phone)}
        />
        <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.phone?.message}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="accountType" className="block text-sm font-medium text-slate-700">
            Account type
          </label>
          <select
            {...register("accountType")}
            id="accountType"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
            aria-invalid={Boolean(errors.accountType)}
          >
            <option value="SAVINGS">Savings account</option>
            <option value="BUSINESS">Business account</option>
            <option value="FOREIGN">Foreign account</option>
          </select>
          <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.accountType?.message}</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="openingBalance" className="block text-sm font-medium text-slate-700">
            Opening balance
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <input
              {...register("openingBalance",{valueAsNumber:true})}
              id="openingBalance"
              type="number"
              min="0"
              step="0.01"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-9 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              placeholder="0.00"
              aria-invalid={Boolean(errors.openingBalance)}
            />
          </div>
          <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.openingBalance?.message}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          autoComplete="new-password"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
          placeholder="Create a secure password"
          aria-invalid={Boolean(errors.password)}
        />
        <p className="min-h-5 text-sm text-red-600" aria-live="polite">{errors.password?.message}</p>
      </div>

      {errors.root && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errors.root.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-not-allowed disabled:bg-violet-400"
      >
        {isSubmitting ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
};

export default CreateUser;