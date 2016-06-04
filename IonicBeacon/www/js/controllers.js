angular.module('app.controllers', [])
  
.controller('devicesCtrl', function($scope,DataService) {
	$scope.$watch(function () { return DataService.getItems() }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.items = DataService.getItems();
    }
});
	
	console.log()
})
   
.controller('smartSenseCtrl', function($scope,DataService) {

})
   
.controller('settingsCtrl', function($scope,DataService) {
	$scope.setting = {
		smartSense: false,
		Expected: true,
		Reality: false
	}
	$scope.updateSetting = function(){
		DataService.setSetting($scope.setting)
		console.log(DataService.getSetting())
	}
})
      
.controller('chatCtrl', function($scope,DataService) {

})
   
.controller('scenesCtrl', function($scope,DataService) {

})
 