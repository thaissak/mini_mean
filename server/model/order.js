var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
	_customer_name: {type: Schema.Types.ObjectId, ref: 'customers'},
	_prod_name: {type: Schema.Types.ObjectId, ref: 'products'},
	quantity: {type: Number}
}, {timestamps: true});

var orders = mongoose.model('orders', orderSchema);