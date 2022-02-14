import Product from "../models/Product.js";

const isUniqueName = async ( req, res, next ) => {
	const { name } = req.body;

	try{
		const product = await Product.findOne({name: name});

		if( product ) {
			return res.status(400).json({
				msg: 'The product ('+ name +') already exists',
			});
		}

		next();

	} catch( err ) {
		console.log(err);
	}
}

export default isUniqueName;
