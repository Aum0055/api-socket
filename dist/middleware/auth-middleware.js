"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const validateLogin = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    next(); // ถ้าข้อมูลถูกต้อง เรียก next() เพื่อไปที่ handler ต่อไป
};
exports.validateLogin = validateLogin;
