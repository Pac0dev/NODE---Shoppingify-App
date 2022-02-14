import {request, response} from 'express';
import Category from '../models/Category.js';

const isValidCategory = async (req = request, res = response, next) => {
	const {category} = req.body;

	try{
		let categoryObject = await Category.findOne({name: category});

		
		if(categoryObject === undefined || categoryObject === null) {
			const newCategory = new Category({name: category});
			categoryObject = await newCategory.save();
		}
		req.categoryId = categoryObject._id;
		next();
	} catch( err ) {
		console.log(err);
		return res.status(500).json({
			msg: 'error validating category',
			err,
		})
	}

}

export default isValidCategory;
