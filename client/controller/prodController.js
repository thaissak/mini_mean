app.controller('prodController', ['$scope', 'prodFactory', function($scope, prodFactory){
	
	$scope.products = [];

	prodFactory.loadProducts(function(list){
		console.log('in loadProducts - client controller', list);
		$scope.products = list;
	})

	$scope.addProduct = function(){
		console.log("in addProduct - client controller");
		prodFactory.addProduct($scope.newProduct, function(data){
			$scope.products = data;
			console.log("data from client prod controller", data);
		})
	}

}]);