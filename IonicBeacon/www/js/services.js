angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('DataService', [function($http){
	var appSetting = {
		smartSense: false,
		Expected: true,
		Reality: false
	};

	var currentRoom = null
var expectedItems = [{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Living Room', child:
	[{class:'', id:'devices-toggle7', model:'', 'toggle-class':'toggle-positive', text:'📺 TV'},
	{class:'', id:'devices-toggle8', model:'', 'toggle-class':'toggle-positive', text:'💨 Celling Fan'},
	{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'💡 Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:'', 'toggle-class':'',text:'Bedroom', child:
	[{class:'', id:'devices-toggle4', model:'', 'toggle-class':'toggle-positive', text:'🌙 Night light'},
	{class:'', id:'devices-toggle20', model:'', 'toggle-class':'toggle-positive', text:'💡 Balcony Light'}]}]

var realityItems = [
	{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Attic', child:
	[{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:'', 'toggle-class':'',text:'Dining Room', child:
	[{class:'', id:'devices-toggle4', model:'', 'toggle-class':'toggle-positive', text:'Celling light 1'},
	{class:'', id:'devices-toggle20', model:'', 'toggle-class':'toggle-positive', text:'Celling light 2'},
	{class:'', id:'devices-toggle4', model:'', 'toggle-class':'toggle-positive', text:'Celling Fan'},
	{class:'', id:'devices-toggle20', model:'', 'toggle-class':'toggle-positive', text:'Smart Oven'},
	{class:'', id:'devices-toggle20', model:'', 'toggle-class':'toggle-positive', text:'Smart Washing Machine'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Toilet DownStairs', child:
	[{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Water Heater'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Toilet UpStairs', child:
	[{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Water Heater'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Kids Room', child:
	[{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle4', model:'', 'toggle-class':'toggle-positive', text:'Celling Fan'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Living Room', child:
	[{class:'', id:'devices-toggle7', model:'', 'toggle-class':'toggle-positive', text:'📺 TV'},
	{class:'', id:'devices-toggle8', model:'', 'toggle-class':'toggle-positive', text:'💨 Celling Fan'},
	{class:'', id:'devices-toggle9', model:'', 'toggle-class':'toggle-positive', text:'💡 Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:'', 'toggle-class':'',text:'Bedroom', child:
	[{class:'', id:'devices-toggle4', model:'', 'toggle-class':'toggle-positive', text:'🌙 Night light'},
	{class:'', id:'devices-toggle20', model:'', 'toggle-class':'toggle-positive', text:'💡 Balcony Light'}]}
	]	
  
  var demoItems = [{class:'item-divider item', id:'devices-list-item-divider1', model:'', 'toggle-class':'',text:'Bedroom', child:
	[{class:'', id:'devices-toggle8', model:'balconyLight', 'toggle-class':'toggle-positive', text:'💡 Balcony Light', pin:'11'},
	{class:'', id:'devices-toggle9', model:'nightLight', 'toggle-class':'toggle-positive', text:'💡 Night Light', pin:'10'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:'', 'toggle-class':'',text:'Study Room', child:
	[{class:'', id:'devices-toggle4', model:'deskLamp', 'toggle-class':'toggle-positive', text:'💡 Desk Lamp', pin:'12'},
	{class:'', id:'devices-toggle20', model:'ceilingLight', 'toggle-class':'toggle-positive', text:'💡 Ceiling Light', pin:'13'}]}]

  var setSetting = function(newObj) {
      appSetting = newObj
  };

  var getSetting = function(){
      return appSetting;
  };

  var getRoom = function(){
		  	  $http({
		  method: 'GET',
		  url: '/someUrl'
		}).then(function successCallback(response) {
		    return response.data.Room;
		  }, function errorCallback(response) {
		    return null;
		  });	
      
  };

  var getItems = function(){
  	  if(appSetting.smartSense){
  	  	return demoItems
  	  }
  	  else if(appSetting.Expected){
  	  	return expectedItems
  	  }
  	  else if(appSetting.Reality){
  	  	return realityItems
  	  }
	}
	return {
    setSetting: setSetting,
    getSetting: getSetting,
    getItems: getItems
  };
}]);

