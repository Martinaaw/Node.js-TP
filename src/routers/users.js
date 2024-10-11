import { Router } from "express";
import { usersController } from "../controllers/users.js";
export const router = Router()
router.post('/register', usersController.registerUser)
router.post('/login', usersController.loginUser)