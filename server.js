import express from 'express';
import dotenv from "dotenv";
import { mongoConnect } from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

await mongoConnect();

app.get('/',(req,res) => {
    res.send('The Message me backend is live')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});