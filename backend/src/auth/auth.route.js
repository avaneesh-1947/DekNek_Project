import express from 'express';
import {signup,login,refresh,logout,me} from './auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refresh);
router.get("/me", authMiddleware, me);
router.post('/logout', authMiddleware, logout);

export default router;