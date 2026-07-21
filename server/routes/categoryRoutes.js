import express from 'express';
import { getCategories, createCategory, deleteCategory } from '../controllers/categoryController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', authenticateToken, createCategory);
router.delete('/:id', authenticateToken, deleteCategory);

export default router;
