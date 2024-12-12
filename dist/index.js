"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const doc_1 = __importDefault(require("./routes/doc"));
require("dotenv/config");
// const cookieParser = require("cookie-parser");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// app.use(cookieParser());
// Dynamic CORS origin based on the environment
// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || 'http://172.17.81.59:8081', // Default to localhost in development
//   credentials: true, // Allow credentials (cookies) to be sent
// };
// console.log(corsOptions);
const corsOptions = {
    origin: (origin, callback) => {
        console.log({ corsOptions: origin });
        if (origin) {
            callback(null, origin); // Allow all origins
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    // origin:"http://localhost:5501",
    credentials: true, // Allow cookies and credentials
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/api', auth_1.default); // เส้นทาง /api/login
app.use('/api', doc_1.default); // เส้นทาง /api/documents
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
