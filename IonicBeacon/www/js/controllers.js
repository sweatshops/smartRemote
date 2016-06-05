angular.module('app.controllers', [])
  
.controller('devicesCtrl', function($scope,$http,DataService) {
	$scope.$watch(function () { return DataService.getItems() }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.items = DataService.getItems();
    }
});
	$scope.$watch('items', function(newVal, oldVal){
		angular.forEach(newVal, function(value, key) {
		  // console.log(value.child);
		  angular.forEach(value.child, function(value2, key2) {
		  		if(value2.pin !== 'undefined' && value2.model !== 'undefined'){
		  			sendPOST(value2.pin, value2.model?1:0)
		  		}
		});
		});
}, true);
	        
	var sendPOST = function(pin, value){
		console.log(pin + value)
        var data = {
        	value: value
        }
        $http.post("http://10.10.80.71:8080/gpio/"+pin, data).success(function(data, status) {
            console.log(data)
        })
	}

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
      
.controller('chatCtrl', function($scope, $http) {
	$scope.history = []

	$scope.sendVoiceText = function(vtt){
		var data = {
			value: vtt
		}
		var temp_history = {
            	vtt: vtt
            }
            $scope.history.push(temp_history)
		$http.post("http://localhost:9000/voiceText", data).success(function(data, status) {
            console.log(data)

        })
	}
	
})
   
.controller('scenesCtrl', function($scope,DataService) {

})
 