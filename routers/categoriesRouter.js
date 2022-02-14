import Router from 'express';
import {check} from 'express-validator';

import {createCategory, getCategories} from '../controllers/categoriesController.js';
import isValidBody from '../middlewares/isValidBody.js';

const router = Router();

router.get('/get-categories', getCategories);

router.post('/create-category', [
	check('name', 'The category name is required').not().isEmpty(),
	isValidBody,
], createCategory);

export default router;
