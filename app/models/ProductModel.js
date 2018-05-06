const BaseModel = require('./BaseModel');

class ProductModel extends BaseModel{
	constructor(){
		super("products");
	}
}

const productModel = new ProductModel();

module.exports = productModel