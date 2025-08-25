import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';


// app fonfig
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

// mongodb+srv://yusun:<db_password>@cluster0.56pxi1l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0