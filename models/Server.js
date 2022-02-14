import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import productRouter from '../routers/productRouter.js';
import categoriesRouter from '../routers/categoriesRouter.js';
import purchaseRouter from '../routers/purchaseRouter.js';

import main from '../db/config.js';
dotenv.config();

class Server {
	constructor() {
		this.PORT = process.env.SERVER_PORT;
		this.app = express();
		this.paths = {
			products: '/api/products',
			categories: '/api/categories',
			purchases: '/api/purchases',
		};
		this.middlewares();
		this.routes();
		this.startDbConn();
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
	}
	routes(){
		this.app.use(this.paths.products, productRouter);
		this.app.use(this.paths.categories, categoriesRouter);
		this.app.use(this.paths.purchases, purchaseRouter);
	}
	init() {
		this.app.listen(this.PORT, () => {
			console.log(`server running at ${this.PORT}`);
		})
	}
	async startDbConn() {
		try{
			await main();
		} catch( err ) {
			console.log('error attempting to connect to DB');
			console.log(err);
		}
	}
}

export default Server;
