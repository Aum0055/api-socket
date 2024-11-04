import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import docRoutes from './routes/doc';
import 'dotenv/config'; 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use('/api', authRoutes);  // เส้นทาง /api/login
app.use('/api', docRoutes);    // เส้นทาง /api/documents
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
 