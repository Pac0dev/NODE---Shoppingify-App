import mongoose from 'mongoose';
//connect to db
const main = async () => await mongoose.connect('mongodb://localhost:27017/shopping'); 

export default main;
