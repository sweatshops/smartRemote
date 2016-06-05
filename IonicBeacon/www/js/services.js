angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('DataService', [function($http){
	var appSetting = {
		smartSense: false,
		Expected: true,
		Reality: false
	};

	var devices = {
  	balconyLight:false,
  	nightLight: false,
  	deskLamp: false,
  	ceilingLight: false,
  }

	var currentRoom = null
var expectedItems = [{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Living Room', child:
	[{class:'', id:'devices-toggle7', model:false, 'toggle-class':'toggle-positive', text:'📺 TV'},
	{class:'', id:'devices-toggle8', model:false, 'toggle-class':'toggle-positive', text:'💨 Celling Fan'},
	{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'💡 Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:false, 'toggle-class':'',text:'Bedroom', child:
	[{class:'', id:'devices-toggle4', model:false, 'toggle-class':'toggle-positive', text:'🌙 Night light'},
	{class:'', id:'devices-toggle20', model:false, 'toggle-class':'toggle-positive', text:'💡 Balcony Light'}]}]


var realityItems = [
	{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Attic', child:
	[{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:false, 'toggle-class':'',text:'Dining Room', child:
	[{class:'', id:'devices-toggle4', model:false, 'toggle-class':'toggle-positive', text:'Celling light 1'},
	{class:'', id:'devices-toggle20', model:false, 'toggle-class':'toggle-positive', text:'Celling light 2'},
	{class:'', id:'devices-toggle4', model:false, 'toggle-class':'toggle-positive', text:'Celling Fan'},
	{class:'', id:'devices-toggle20', model:false, 'toggle-class':'toggle-positive', text:'Smart Oven'},
	{class:'', id:'devices-toggle20', model:false, 'toggle-class':'toggle-positive', text:'Smart Washing Machine'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Toilet DownStairs', child:
	[{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Water Heater'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Toilet UpStairs', child:
	[{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Water Heater'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Kids Room', child:
	[{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'Celling Light'},
	{class:'', id:'devices-toggle4', model:false, 'toggle-class':'toggle-positive', text:'Celling Fan'}]},
	{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Living Room', child:
	[{class:'', id:'devices-toggle7', model:false, 'toggle-class':'toggle-positive', text:'📺 TV'},
	{class:'', id:'devices-toggle8', model:false, 'toggle-class':'toggle-positive', text:'💨 Celling Fan'},
	{class:'', id:'devices-toggle9', model:false, 'toggle-class':'toggle-positive', text:'💡 Celling Light'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:false, 'toggle-class':'',text:'Bedroom', child:
	[{class:'', id:'devices-toggle4', model:false, 'toggle-class':'toggle-positive', text:'🌙 Night light'},
	{class:'', id:'devices-toggle20', model:false, 'toggle-class':'toggle-positive', text:'💡 Balcony Light'}]}]	
  
  var demoItems = [{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Bedroom',room:'BEDROOM',child:
	[{class:'', id:'devices-toggle8', model:devices.balconyLight, 'toggle-class':'toggle-positive', text:'💡 Balcony Light', pin:'11'},
	{class:'', id:'devices-toggle9', model:devices.nightLight, 'toggle-class':'toggle-positive', text:'💡 Night Light', pin:'10'}]},
	{class:'item-divider item', id:'devices-list-item-divider2', model:false, 'toggle-class':'',text:'Study Room', room:'STUDY ROOM', child:
	[{class:'', id:'devices-toggle4', model:devices.deskLamp, 'toggle-class':'toggle-positive', text:'💡 Desk Lamp', pin:'12'},
	{class:'', id:'devices-toggle20', model:devices.ceilingLight, 'toggle-class':'toggle-positive', text:'💡 Ceiling Light', pin:'13'}]}]

	var  bed = [{class:'item-divider item', id:'devices-list-item-divider1', model:false, 'toggle-class':'',text:'Bedroom',room:'BEDROOM',child:
	[{class:'', id:'devices-toggle8', model:devices.balconyLight, 'toggle-class':'toggle-positive', text:'💡 Balcony Light', pin:'11'},
	{class:'', id:'devices-toggle9', model:devices.nightLight, 'toggle-class':'toggle-positive', text:'💡 Night Light', pin:'10'}]}]

	var study = [{class:'item-divider item', id:'devices-list-item-divider2', model:false, 'toggle-class':'',text:'Study Room', room:'STUDY ROOM', child:
	[{class:'', id:'devices-toggle4', model:devices.deskLamp, 'toggle-class':'toggle-positive', text:'💡 Desk Lamp', pin:'12'},
	{class:'', id:'devices-toggle20', model:devices.ceilingLight, 'toggle-class':'toggle-positive', text:'💡 Ceiling Light', pin:'13'}]}]

  
  var setSetting = function(newObj) {
      appSetting = newObj
  };

  var getSetting = function(){
      return appSetting;
  };

var setRoom = function(newObj) {
      currentRoom = newObj
  };

  var getRoom = function(){
      return currentRoom;
  };
  var getItems = function(){
  	  if(appSetting.smartSense){
  	  	if(currentRoom == 'BEDROOM')
  	  		return bed;
  	  	else if(currentRoom == 'STUDY ROOM')
  	  		return study;
  	  	else{
  	  		return demoItems
  	  	}
  	  	
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
    getItems: getItems,
    getRoom: getRoom,
    setRoom: setRoom
  };
}]);

