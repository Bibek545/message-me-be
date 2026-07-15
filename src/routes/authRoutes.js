import express from 'express';
import { insertNewUser } from '../controller/authController.js';
const router = express.Router();

//POST router for creating user
router.post("/register", insertNewUser);

export default router;