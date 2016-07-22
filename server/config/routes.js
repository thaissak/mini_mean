module.exports = function(app){
	var products = require('../controller/products.js');
	var customers = require('../controller/customers.js');
	var orders = require('../controller/orders.js');
	var dashboard = require('../controller/dashboard.js');

	// app.get('/', function(req,res){
	// 	dashboard.index(req,res);
	// })

	app.get('/products', function(req,res){
		products.get_products(req,res);
	})

    app.post('/products', function(req,res){
    	products.addProduct(req,res);
    })

	app.get('/customers', function(req,res){
		customers.get_customers(req,res);
	})

	app.post('/customers', function(req,res){
    	customers.addCustomer(req,res);
    })

    app.get('/orders', function(req,res){		
		orders.get_orders(req,res);	
	})

	app.post('/orders', function(req,res){
    	orders.addOrder(req,res);
    })

}