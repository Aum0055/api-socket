import { Request, Response } from 'express';

export const auth = (req: Request, res: Response) => {
  // Logic สำหรับการล็อกอิน
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
