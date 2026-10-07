import { z } from "zod";

export const accountTypeSchema = z.enum(["SAVINGS", "BUSINESS", "FOREIGN"]);

export const registerSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().trim().min(2, "First name must be at least 2 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  accountType: accountTypeSchema,
  openingBalance: z.number().min(0, "Opening balance cannot be negative").max(1000000000, "Opening balance is too large"),
});

export const loginSchema = z.object({
  email: z.email("invalid email"),
  password: z.string().min(5, "password must be atleast 6 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;