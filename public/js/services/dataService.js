 


app.service('dataService', function($http, $q){


this.getTextInfo = function(messageObject){
	var deferred = $q.defer();
	console.log('object = ', messageObject);
	var url = 'https://twiliomessagingapp.firebaseio.com/';	
	$http({
		method: 'GET',
		url: url,
		data: {
			     // message: 
			     // to: 
			     // time: 
			    }
		// headers: {
		// 	'X-Mashape-Key': 'at8kvInJTSmshvdlZF2iI7o4nKEYp1LFhGMjsnAyq91nM7Sond',
		// 	'Accept': 'application/json'
		// }
	}).then(function(data) {
	    deferred.resolve(data);	
	})
   };
 });

