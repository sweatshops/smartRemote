angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('tabsController.devices', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/devices.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.smartSense', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/smartSense.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.settings', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('chat', {
      url: '/page5',
      templateUrl: 'templates/chat.html',
      controller: 'chatCtrl'
    })
        
      
    
      
        
    .state('scenes', {
      url: '/page6',
      templateUrl: 'templates/scenes.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/page1/page2');
  

  

});