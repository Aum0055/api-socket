import bcrypt from 'bcrypt';
import { createUserSchema, loginSchema } from '../zod/auth';
import { Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabase/public-admin';
import { z } from 'zod';
import jwt from "jsonwebtoken";
import { env } from "process";
import { PostgrestError } from '@supabase/supabase-js';

export const Login = async (req: Request, res: Response) => {
  const authToken = 'fake_auth_token_12345';

  res.cookie('auth_token_tit', authToken, {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    sameSite: 'lax', // Adjust if needed
    secure: false, // Don't use true unless HTTPS is enabled
    domain: 'localhost', // Ensure the domain is set to localhost
  });
  
  return res.status(200).json({ message: "Login successful", authToken });
  

  // try {
  //   const parsedData = loginSchema.parse(req.body);
  //   const { username, password } = parsedData; // Destructure the validated input
  //   const { data, error, status }
  //   // : {
  //   //   data: authType[] | null;
  //   //   error: PostgrestError | null;
  //   //   status: number | null;
  //   // }  
  //   = await supabaseAdmin
  //     .from("auth")
  //     .select('*')
  //     .or(`eq.email.${username},eq.username.${username}`);

  //   if (error)
  //     return res.status(status || 500).json({ message: 'An error occurred during login.' });

  //   const user = data?.[0];

  //   if (!user)
  //     return res.status(401).json({ message: 'Invalid username or password.' });


  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   if (!isPasswordValid)
  //     return res.status(401).json({ message: 'Invalid username or password.' });

  //   const session = jwt.sign(user, env.KEY_JWT!);

  //   res.json({ message: 'Login successful', session: session });

  // } catch (error) {
  //   if (error instanceof z.ZodError)
  //     return res.status(400).json({ errors: error.errors });
  //   return res.status(500).json({ message: 'Internal server error.' });
  // }
};


export const Logout = async (req: Request, res: Response) => {
  const authToken = 'fake_auth_token_12345'
  console.log('Logout');
  res.clearCookie('auth_token_tit', { path: '/' });

  return res.status(200).json({ message: 'Logout successful' });

};

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const parsedData = createUserSchema.parse(req.body);
    const { username, password, email } = parsedData; // Destructure the validated input

    const { data, error, status } = await supabaseAdmin
      .from("auth")
      .insert({ username, password, email })
      .select('*')

    if (error)
      return res.status(status || 500).json({ message: 'An error occurred during login.' });

    const user = data?.[0];

    if (!user)
      return res.status(401).json({ message: 'Invalid username or password.' });


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: 'Invalid username or password.' });

    res.json({ message: 'Create user successful' });

  } catch (error) {
    if (error instanceof z.ZodError)
      return res.status(400).json({ errors: error.errors });
    return res.status(500).json({ message: 'Internal server error.' });
  }
}