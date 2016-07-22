app.factory('custFactory', function($http){

	var factory = {};
	var customers = [];

	factory.addCustomer = function(data, callback){
		console.log('Im in addCustomer', data);
		$http.post('/Customers', data).then(function(result){
			console.log('Inserted new customer into db', result);
			customers.push(result.data);
			callback(customers);
		})
	}

	factory.loadCustomers = function(callback){
		console.log('Im in loadCustomers');
		$http.get('/Customers').then(function(list){
			console.log('retrieved customers list', list);
			customers = list.data;
			console.log('my list of customers', customers);
			callback(customers);
		})
	}

	// factory.deleteCustomer = function(){
		
	// }

	return factory;
})