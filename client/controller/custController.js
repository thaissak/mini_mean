app.controller('custController', ['$scope', 'custFactory', function($scope, custFactory){

	$scope.customers = [];

	custFactory.loadCustomers(function(list){
		console.log('in loadCustomers - client controller', list);
		$scope.customers = list;
	})

	$scope.addCustomer = function(){
		console.log('in addCustomer - client controller');
		custFactory.addCustomer($scope.newCustomer, function(data){
			$scope.customers = data;
			console.log('data from customer controller', data);
		})
	}

	// $scope.deleteCustomer = function(){
		// needs to delete the customer from customers but also goes to orders, 
		// looks for all orders for this customer and delete them as well
	// }
}]);
