	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('date', {
	      url: "/date",
	      templateUrl: "partials/date.html"
	    })

	    .state('visualization', {
	      url: "/visualization",
	      templateUrl: "partials/visualization.html"
	    })

	    .state('stories', {
	      url: "/stories",
	      templateUrl: "partials/stories.html"
	    })

	    .state('report', {
	      url: "/report",
	      templateUrl: "partials/report.html"
	    })

	});