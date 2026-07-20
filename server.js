import express from 'express';
import cors from 'cors'
import dotenv from "dotenv";
import { mongoConnect } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000


//connecting routes

await mongoConnect();

app.use(cors())
app.use(express.json());
//connecting routes
app.use("/api/v1/auth", authRoutes )

app.get('/',(req,res) => {
    res.send('The Message me backend is live')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});