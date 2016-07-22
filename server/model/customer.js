var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
	customer_name: {type: String},
}, {timestamps: true});

var customers = mongoose.model('customers', customerSchema);