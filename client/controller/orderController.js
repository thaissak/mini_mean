app.controller('orderController', ['$scope', 'prodFactory', 'custFactory','orderFactory', function($scope, prodFactory, custFactory, orderFactory){

	$scope.orders = [];
	$scope.customers = [];
	$scope.products = [];

	prodFactory.loadProducts(function(list){
		console.log('in loadProducts - client order controller', list);
		$scope.products = list;
	})

	custFactory.loadCustomers(function(list){
		console.log('in loadCustomers - client order controller', list);
		$scope.customers = list;
	})

	orderFactory.loadOrders(function(list){
		console.log('in loadOders - client order controller', list);
		$scope.orders = list;
	})

	$scope.addOrder = function(){
		console.log('in addOrder - client controller');
		orderFactory.addOrder($scope.newOrder, function(data){
			console.log('in the data status addorder');
			orderFactory.loadOrders(function(list){
				$scope.orders = list;
				console.log("order list after adding", $scope.orders);
			})
		})
	}
}]);
