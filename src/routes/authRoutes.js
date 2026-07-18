import express from 'express';
import { insertNewUser, loginUser } from '../controller/authController.js';
const router = express.Router();

//POST router for creating user
router.post("/register", insertNewUser);

router.post("/login", loginUser)

export default router;