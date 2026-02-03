import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().min(10),
    password: z.string().min(10),
})