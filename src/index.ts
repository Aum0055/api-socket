import express from 'express';
import cors, { CorsOptions } from 'cors';
import authRoutes from './routes/auth';
import docRoutes from './routes/doc';
import 'dotenv/config';
// const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8080;

// app.use(cookieParser());

// Dynamic CORS origin based on the environment
// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || 'http://172.17.81.59:8081', // Default to localhost in development
//   credentials: true, // Allow credentials (cookies) to be sent
// };

// console.log(corsOptions);

const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean | string) => void) => {
    console.log({corsOptions:origin});
    
    if (origin) {
      callback(null, origin); // Allow all origins
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // origin:"http://localhost:5501",
  credentials: true, // Allow cookies and credentials
};


app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', authRoutes);  // เส้นทาง /api/login
app.use('/api', docRoutes);    // เส้นทาง /api/documents
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
