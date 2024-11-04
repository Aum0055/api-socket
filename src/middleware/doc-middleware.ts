import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from 'process';

const SECRET_KEY = env.SECRET_KEY || 'your_secret_key';
const API_KEY = env.API_KEY;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  const apiKey = req.headers['api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Invalid or missing API key' });
  }

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    
    next();
  });
};
