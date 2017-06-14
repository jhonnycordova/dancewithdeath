'use strict';

angular.module('Client')
	.controller('IndexAppointmentCtrl', function($scope, AppointmentResource, $location, $timeout) {
		$scope.Appointments = AppointmentResource.query();
		$scope.mensaje = null;

		$scope.removeAppointment = function(Appointment) {

			 AppointmentResource.delete({
					id: Appointment.id
			 }, function(success) {

				 var index = $scope.Appointments.indexOf(Appointment);
      	 $scope.Appointments.splice(index,1);

				 $scope.typeError = 'success';
				 $scope.mensaje = 'Appointment Deleted';
				 $timeout(function() {
					 $scope.typeError = '';
					 $scope.mensaje = '';
				 }, 2000);
			 }, function (error) {
				 $scope.typeError = 'danger';
				 $scope.mensaje = 'Error';
			 });

		};
	})


	.controller('CreateAppointmentCtrl', function($scope, AppointmentResource, $location, $timeout, $http) {
		$scope.title = "Appointment Create";
		$scope.button = "Save";
		$scope.Appointment = {};
		$scope.selectTime = false;
		$scope.divTime = true;

		$scope.mensaje = null;

		$scope.putIdTime = function(id){
			if(id == "9:00"){
				id = 1;
			}else if(id == "9:30"){
				id = 2;
			}else if(id == "10:00"){
				id = 3;
			}else if(id == "10:30"){
				id = 4;
			}else if(id == "11:00"){
				id = 5;
			}else if(id == "11:30"){
				id = 6;
			}else if(id == "12:00"){
				id = 7;
			}else if(id == "12:30"){
				id = 8;
			}else if(id == "13:00"){
				id = 9;
			}else if(id == "13:30"){
				id = 10;
			}else if(id == "14:00"){
				id = 11;
			}else if(id == "14:30"){
				id = 12;
			}else if(id == "15:00"){
				id = 13;
			}else if(id == "15:30"){
				id = 14;
			}else if(id == "16:00"){
				id = 15;
			}else if(id == "16:30"){
				id = 16;
			}else if(id == "17:00"){
				id = 17;
			}else if(id == "17:30"){
				id = 18;
			}else if(id == "18:00"){
				id = 19;
			}
			$scope.Appointment.idtime = id;
		}

		$scope.findDates = function(date){
			$http.get("http://localhost/dance_with_death/API_DANCE/public/appointments/times/"+date )
			      .then(function(response){
							 $scope.selectTime = true;
							 $scope.optionsTime = response.data;
			});
		}

		$scope.saveAppointment = function(Appointment) {
			AppointmentResource.save($scope.Appointment, function(success) {

				$scope.typeError = 'success';
				$scope.mensaje = 'Appointment Created!';
			}, function(error){
				$scope.typeError = 'danger';
				$scope.mensaje = 'Error';
			});
			$timeout(function() {
				$location.path('/appointments');
				$scope.typeError = '';
				$scope.mensaje = '';
			}, 1000);
			};
	})
	.controller('EditAppointmentCtrl', function($scope, AppointmentResource, $location, $timeout, $routeParams, $http) {
		$scope.title = "Appointment Update";
		$scope.button = "Update";
		$scope.searchDate = '';
		$scope.Appointment = AppointmentResource.get({
			id: $routeParams.id
		}, function (data) {
			$scope.findDates(data.date, data);
		});

		$scope.selectTime = true;
		$scope.divTime = true;



		$scope.putIdTime = function(id){
			if(id == "9:00"){
				id = 1;
			}else if(id == "9:30"){
				id = 2;
			}else if(id == "10:00"){
				id = 3;
			}else if(id == "10:30"){
				id = 4;
			}else if(id == "11:00"){
				id = 5;
			}else if(id == "11:30"){
				id = 6;
			}else if(id == "12:00"){
				id = 7;
			}else if(id == "12:30"){
				id = 8;
			}else if(id == "13:00"){
				id = 9;
			}else if(id == "13:30"){
				id = 10;
			}else if(id == "14:00"){
				id = 11;
			}else if(id == "14:30"){
				id = 12;
			}else if(id == "15:00"){
				id = 13;
			}else if(id == "15:30"){
				id = 14;
			}else if(id == "16:00"){
				id = 15;
			}else if(id == "16:30"){
				id = 16;
			}else if(id == "17:00"){
				id = 17;
			}else if(id == "17:30"){
				id = 18;
			}else if(id == "18:00"){
				id = 19;
			}
			$scope.Appointment.idtime = id;

		}

		$scope.findDates = function(date, data = null){

			$http.get("http://localhost/dance_with_death/API_DANCE/public/appointments/times/"+date )
			      .then(function(response){
							 $scope.selectTime = true;
							 $scope.optionsTime = response.data;
							 if (null != data) {
								 $scope.optionsTime.push({id: data.startTime, name : data.startTime});
								 //$scope.Appointment.startTime = data.startTime;
							 }


			});
		}



		$scope.saveAppointment = function() {
			AppointmentResource.update($scope.Appointment, function(success) {
				$scope.typeError = 'success';
				$scope.mensaje = 'Appointment Updated!';
			}, function (error) {
				$scope.typeError = 'danger';
				$scope.mensaje = 'Errorr';
			});

			$timeout(function() {
				$location.path('/appointments');
				$scope.typeError = '';
				$scope.mensaje = '';
			}, 1000);
		};
	});
