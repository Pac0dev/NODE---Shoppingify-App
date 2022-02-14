import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema({
	name: {
		type: String,
		required: [true, 'The product name is required'],
	}, 
	desc: {
		type: String, 
		required: [true, 'The product name is required'],
	},
	img: {
		type: String,
		default: '',
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
	},
});

const Product = mongoose.model('Product', productSchema);

export default Product;
