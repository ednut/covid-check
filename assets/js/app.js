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

	    .state('notify', {
	      url: "/notify",
	      templateUrl: "partials/notify.html"
	    })

	    .state('verify', {
	      url: "/verify",
	      templateUrl: "partials/verify.html"
	    })

	    .state('metre', {
	      url: "/metre",
	      templateUrl: "partials/metre.html"
	    })

	    .state('probe', {
	      url: "/probe",
	      templateUrl: "partials/probe.html"
	    })

	});