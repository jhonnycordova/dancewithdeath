'use strict';

angular.module('Client')
	.factory('AppointmentResource', function($resource) {
		return $resource("http://localhost:8000/appointments/:id", {
			id: "@id"
		}, {
			update: {
				method: "PUT"
			}
		});
	})

	// .factory('TimeResource', function($resource) {
	// 	return $resource("http://localhost:8000/appointments/times/:date", {
	// 		date: "@date"
	// 	});
	// })

	;
