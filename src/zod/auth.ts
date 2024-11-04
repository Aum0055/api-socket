import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string().min(1, { message: 'Username is required.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
});

const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const createUserSchema = z.object({
    email: z.string().email(),
    username: z.string().min(1, { message: 'Username is required.' }),
    password: z.string()
        .refine((value) => strongPasswordRegex.test(value), {
            message:
                "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)",
        }),
});
