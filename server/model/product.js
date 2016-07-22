var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	prod_name: {type: String},
	image: {type: String},
	description: {type: String},
	quantity: {type: Number}
}, {timestamps: true});

var products = mongoose.model('products', productSchema);