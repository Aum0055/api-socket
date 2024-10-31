"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res) => {
    // Logic สำหรับการล็อกอิน
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful' });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
exports.auth = auth;
