import Category from "../models/Category.js";

const createCategory = async (req, res) => {
	const {name} = req.body;

	const category = new Category({name: name});

	try{
		const newCategory = await category.save();
		return res.json( {
			msg: 'Category created',
			category: newCategory,
		} )
	} catch( err ) {
		console.log(err);
	}
	
};

const getCategories = async ( req, res ) => {
	try {
		const categories = await Category.find();

		console.log(categories, '<-');

		if( categories === null || categories === undefined || categories.length === 0) {
			return res.status(400).json({
				msg: 'No categories founded',
			});
		};

		return res.json( {
			categories: categories,
		} );
	} catch( err ) {
		console.log(err);
	}
}

export {
	createCategory,
	getCategories,
}
