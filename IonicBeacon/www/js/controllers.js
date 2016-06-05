angular.module('app.controllers', [])
  
.controller('devicesCtrl', function($scope,$http,DataService,$timeout) {
	$scope.$watch(function () { return DataService.getItems() }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.items = DataService.getItems();
        $scope.currentRoom = DataService.getRoom();
        $scope.setting = DataService.getSetting();
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

	$scope.$watch('setting', function(newVal, oldVal){
		console.log("CHANGED")
		$scope.items = DataService.getItems();
}, true);
	        
	var sendPOST = function(pin, value){
		console.log(pin + value)
		if(pin === undefined || value === undefined){
			return
		}
        var data = {
        	value: value
        }
        $http.post("http://10.10.101.0:8080/gpio/"+pin, data).success(function(data, status) {
            console.log(data)
        })
	}
	var pastRoom;
	var getRoom = function(){
	$http.get("http://10.10.100.238:3000/room")
    .then(function(response) {
        console.log(response.data.current_room.toUpperCase())
        DataService.setRoom(response.data.current_room.toUpperCase())
        if(pastRoom != response.data.current_room.toUpperCase()){
        	pastRoom = response.data.current_room.toUpperCase()
        	$scope.items = DataService.getItems();
        }
        	

		    return response.data.current_room.toUpperCase();
    });
  };
  $scope.intervalFunction = function(){
    $timeout(function() {
      getRoom()
      $scope.intervalFunction();
    }, 1000)
  };

  // Kick off the interval
  $scope.intervalFunction();


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
		$http.get("http://10.10.100.239:3000/voiceText/"+vtt)
    .then(function(response) {
        console.log("success")
    });
	}
})
   
.controller('scenesCtrl', function($scope,DataService) {

})
 