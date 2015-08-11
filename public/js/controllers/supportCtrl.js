var app = angular.module('nodeFun')

app.controller('supportCtrl', function($scope, $firebaseObject, $firebase, $firebaseArray, dataService) {
var ref = new Firebase('https://twiliomessagingapp.firebaseio.com/numbers/');
$scope.messages = $firebaseObject(ref);
$scope.refObject = dataService.getTextInfo($scope.messages);
for(var key in $scope.messages) {
	if($scope.messages[key] != 'undefined')console.log($scope.messages[key]);
}
console.log($scope.messages);
// $scope.messages.$loaded().then(function(response){
// 	console.log($scope.messages);
// });
});