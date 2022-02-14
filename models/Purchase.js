import mongoose from 'mongoose';

const {Schema} = mongoose;

const purchaseSchema = new Schema({
	name: {
		type: String, 
		required: [true, 'The purchase name is required']
	},
	date: {
		type: Date,
		required: [true, 'The date is required'],
	},
	products: {
		type: Array,
		required: [true, 'The products/product is/are required'],
	},
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
