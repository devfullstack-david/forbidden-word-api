import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().min(10),
    password: z.string().min(10),
})

export const RegisterSchema = z.object({
    email: z.string().min(10),
    name: z.string().min(3),
    password: z.string().min(10, "The password must be at least 10 characters long"),
    confirmPassword: z.string().min(10, "The confirm password must be at least 10 characters long"),
    birthday: z.coerce.date(),
    isAgreedToTerms: z.boolean().refine((data) => data === true, {
        message: "You must agree to the terms",
        path: ["isAgreedToTerms"],
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type RegisterInput = z.infer<typeof RegisterSchema>
