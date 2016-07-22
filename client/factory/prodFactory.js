app.factory('prodFactory', function($http){

	var factory = {};
	var products = [];

	factory.addProduct = function(data, callback){
		console.log("I'm in addProduct", data);
		$http.post('/Products', data).then(function(result){
			console.log("Inserted new product into db", result);
			products.push(result.data);
			callback(products);
		})
	}

	factory.loadProducts = function(callback){
		console.log("I'm in loadProducts");
		$http.get('/Products').then(function(list){
			console.log("Retrieved products list from db", list);
			products = list.data;
			console.log("My list of products", products);
			callback(products);
		})
	}
	return factory;

})