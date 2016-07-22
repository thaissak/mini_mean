app.factory('orderFactory', function($http){

	var factory = {};
	var orders = [];

	factory.addOrder = function(data, callback){
		console.log("I'm in addOrder", data);
		$http.post('/Orders', data).then(function(result){
			console.log("Inserted new Order into db", result);
			orders.push(result.data);
			callback(orders);
		})
	}

	factory.loadOrders = function(callback){
		console.log("I'm in loadOrders");
		$http.get('/Orders').then(function(list){
			console.log("Retrieved Orders list from db", list);
			orders = list['data'];
			console.log("My list of Orders", orders);
			callback(orders);
		})
	}
	return factory;

})