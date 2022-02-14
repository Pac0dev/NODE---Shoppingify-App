import Purchase from "../models/Purchase.js";

const getPurchases = async (req, res) => {
	try{
		const purchases = await Purchase.find();
		
		if( purchases === undefined || purchases === null ) {
			return res.json( {
				msg: 'Not purchases created yet',
			} );
		}

		return res.json({
			purchases: purchases,
		});
	} catch( err ) {
		console.log(err);
	};
};

const createPurchase = async ( req, res  ) => {
	const { name, date, products, count } = req.body;

	const purchase = new Purchase({name: name, date: date, products: products });


	try {
		const newPurchase = await purchase.save();

		return res.status(200).json({
			purchase: newPurchase,
		});

	} catch ( err ) {
		console.log(err);
		return res.status(500).json( {
			msg: 'error in server', 
			error: err,
		} );
	}

}

export {
	getPurchases,
	createPurchase,
}
