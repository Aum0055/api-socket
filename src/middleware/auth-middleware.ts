import { Request, Response, NextFunction } from 'express';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    next(); // ถ้าข้อมูลถูกต้อง เรียก next() เพื่อไปที่ handler ต่อไป
};
