"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const public_admin_1 = require("../lib/supabase/public-admin");
// import bcrypt from 'bcrypt';
const Login = async (req, res) => {
    const { username, password } = req.body;
    const { data, error, status } = await public_admin_1.supabaseAdmin
        .from("auth")
        .select('password')
        .or(`eq.email.${username},eq.username.${username}`);
    if (error)
        return res.status(status).json(error);
    const user = data?.[0];
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid)
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // else
    //   res.json({ message: 'Login successful' });
};
exports.Login = Login;
