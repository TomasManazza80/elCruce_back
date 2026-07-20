import express from 'express';
import * as productController from '../controllers/productController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/', productController.getProducts);

// Requires authentication to modify products
router.post('/', productController.createProduct);
router.put('/:id', authenticateToken, productController.updateProduct);
router.delete('/:id', authenticateToken, productController.deleteProduct);

export default router;
