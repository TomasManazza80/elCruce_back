import express from 'express';
import { getCategories, createCategory } from '../controllers/categoryController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', authenticateToken, createCategory);

export default router;
