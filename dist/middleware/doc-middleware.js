"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const SECRET_KEY = 'your_secret_key';
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log({ token });
    next();
    // if (!token) {
    //   return res.status(401).json({ message: 'Access denied. No token provided.' });
    // }
    // try {
    //   const decoded = jwt.verify(token, SECRET_KEY);
    //   req.user = decoded;
    //   next();
    // } catch (error) {
    //   res.status(400).json({ message: 'Invalid token.' });
    // }
};
exports.authMiddleware = authMiddleware;
