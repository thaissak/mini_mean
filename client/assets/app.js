var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/Products', {
		templateUrl: 'partial/products.html',
		controller: 'prodController'
	})

	.when('/Customers', {
		templateUrl: 'partial/customers.html',
		controller: 'custController'
	})

	.when('/Orders', {
		templateUrl: 'partial/orders.html',
		controller: 'orderController'
	})

	.otherwise({
		redirecTo: '/'
	})
});