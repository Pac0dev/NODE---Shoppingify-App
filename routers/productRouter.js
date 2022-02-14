import Router from 'express';
import {check} from 'express-validator';
import {getProducts, createProduct, deleteProduct} from '../controllers/productController.js';
import isValidBody from '../middlewares/isValidBody.js';
import isUniqueName from '../middlewares/uniqueName.js';
import isValidCategory from '../middlewares/isValidCategory.js'

const router = Router();

router.get('/get-products', getProducts );

router.post('/create-product', [
	check('name', 'The product name is required').not().isEmpty(),
	check('desc', 'The description es required').not().isEmpty(),
	isValidCategory,
	isUniqueName,
	isValidBody,
], createProduct);

router.delete('/delete-product', [
	check('id', 'The id is not valid').isMongoId(),
	check('id', 'The id is required').not().isEmpty(),
	isValidBody,
], deleteProduct)

export default router;
