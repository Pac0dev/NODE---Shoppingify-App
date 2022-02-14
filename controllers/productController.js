import { request, response } from "express";
import Product from "../models/Product.js";

const getProducts = async (req = request, res = response) => {
	try {
		const products = await Product.find().populate('category');

		if (!products || products === undefined || products === null) {
			return res.status(400).json({
				msg: "Not products created yet",
			});
		}

		return res.json({
			products: products,
		});

	} catch (err) {
		console.log(err);
	}
};

const createProduct = async (req = request, res = response) => {
	const { name, desc, ...rest } = req.body;
	//this id is got with a middleware
	const category = req.categoryId;


	try {
		const product = new Product({ name, desc, category });

		const newProduct = await product.save();

		return res.json({
			product: newProduct,
		});
	} catch (err) {
		console.log(err);
	}
};

const deleteProduct = async (req = request, res = response) => {
	const {id} = req.body;
	try {
		const removedProduct = await Product.findByIdAndRemove(id);
		if(removedProduct === undefined || removedProduct === null)
			return res.status(400).json({msg: 'cant find product / not removed'});

		return res.json({
			msg: 'Product removed',
			product: removedProduct
		});

	} catch( err ) {
		console.log(err);
		res.status(500).json({error: err});
	}
}

export { getProducts, createProduct, deleteProduct };
