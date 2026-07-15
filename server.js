import express from 'express';
import dotenv from "dotenv";
import { mongoConnect } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000


//connecting routes

await mongoConnect();

//connecting routes
app.use("/api/v1/auth", authRoutes )
app.get('/',(req,res) => {
    res.send('The Message me backend is live')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});