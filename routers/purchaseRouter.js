import Router from 'express';
import {check} from 'express-validator';
import {createPurchase, getPurchases} from '../controllers/purchasesController.js';
//import isValidProductCount from '../middlewares/isValidProductCount.js';
import isValidBody from '../middlewares/isValidBody.js';
import isValidDate from '../middlewares/isValidDate.js';

const router = Router();

router.get('/get-purchases', getPurchases);

router.post('/create-purchase', [
	check('name', 'The purchase name is required').not().isEmpty(),
	check('date').custom( isValidDate ),
	check('products', 'The product/products are required').not().isEmpty(),
	isValidBody,
], createPurchase);

export default router;
