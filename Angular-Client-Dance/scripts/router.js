'use strict';

angular.module('Client',['ngResource','ngRoute','720kb.datepicker'])

	.config(function($routeProvider){
		$routeProvider
		.when('/appointments',{
			templateUrl: 'views/appointment/index.html',
			controller: 'IndexAppointmentCtrl'
		})
		.when('/appointments/new',{
			templateUrl: 'views/appointment/create.html',
			controller: 'CreateAppointmentCtrl'
		})
		.when('/appointments/edit/:id',{
			templateUrl: 'views/appointment/create.html',
			controller: 'EditAppointmentCtrl'
		}).when('/',{
			templateUrl: 'views/appointment/root.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

	// .config(function ($stateProvider, $urlRouterProvider) {
  //           $stateProvider
  //                   .state('appointments', {
  //                       url: '/appointments',
  //                       templateUrl: 'views/appointment/index.html',
  //                       controller: 'IndexAppointmentCtrl'
  //                   })
  //                   .state('appointments.new', {
  //                       url: '/new',
  //                       templateUrl: 'views/appointment/create.html',
  //                       controller: 'CreateAppointmentCtrl'
  //                   })
  //                   .state('appointment.edit', {
  //                       url: '/edit/:id',
  //                       templateUrl: 'views/appointment/create.html',
  //                       controller: 'EditAppointmentCtrl',
  //                   })
  //                   ;
  //           $urlRouterProvider.otherwise('/appointments');
  //       });
