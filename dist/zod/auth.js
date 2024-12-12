"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: 'Username is required.' }),
    password: zod_1.z.string().min(1, { message: 'Password is required.' }),
});
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
exports.createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    username: zod_1.z.string().min(1, { message: 'Username is required.' }),
    password: zod_1.z.string()
        .refine((value) => strongPasswordRegex.test(value), {
        message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)",
    }),
});
