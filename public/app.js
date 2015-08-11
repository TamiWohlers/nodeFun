var app = angular.module('nodeFun', ['ngRoute',  'firebase']);

app.config(function($routeProvider){

	$routeProvider
	  .when('/', {
	  	templateUrl: 'views/home.html',
	  	controller: 'MainCtrl'

	  })
	  .when('/support',  {
	  	templateUrl: 'views/support.html',
	  	controller: 'supportCtrl'
	  })


	  .otherwise({
	  	redirectTo: '/'
	  })

})