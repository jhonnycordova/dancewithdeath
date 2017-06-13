'use strict';

angular.module('Client')
	.factory('AppointmentResource', function($resource) {
		return $resource("http://localhost/dance_with_death/API_DANCE/public/appointments/:id", {
			id: "@id"
		}, {
			update: {
				method: "PUT"
			}
		});
	})
	;
