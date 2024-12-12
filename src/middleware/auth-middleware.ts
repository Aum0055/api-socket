import { Request, Response, NextFunction } from 'express';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    // const authHeader = req.headers.authorization;

    // if (!authHeader || !authHeader.startsWith('Bearer '))
    //     return res.status(401).json({ message: 'Unauthorized' });

    next();
};
