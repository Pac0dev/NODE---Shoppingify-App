const isValidProductCount = (value = 0) => {
	if (value <= 0 || typeof value !== 'number') {
		console.log( typeof number )
		return Promise.reject("Invalid product count");
	}
	return true;
};

export default isValidProductCount;
