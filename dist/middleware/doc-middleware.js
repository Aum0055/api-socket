"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const process_1 = require("process");
const SECRET_KEY = process_1.env.SECRET_KEY || 'your_secret_key';
const API_KEY = process_1.env.API_KEY;
const authMiddleware = (req, res, next) => {
    // const token = req.headers['authorization']?.split(' ')[1];
    // const apiKey = req.headers['api-key'];
    // if (!apiKey || apiKey !== API_KEY) {
    //   return res.status(401).json({ message: 'Invalid or missing API key' });
    // }
    // if (!token) {
    //   return res.status(401).json({ message: 'Token is missing' });
    // }
    // jwt.verify(token, SECRET_KEY, (err, decoded) => {
    //   if (err) {
    //     return res.status(403).json({ message: 'Failed to authenticate token' });
    //   }
    //   req.user = decoded;
    next();
    // });
};
exports.authMiddleware = authMiddleware;
