(function () {
  'use strict';
  var app = angular.module('TutoSiteApp', ['ngMaterial','ngGeolocation']);
  app.controller('drawerCtrl',['$scope','$mdSidenav',function($scope,$mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
    var imagePath = 'img/list/60.jpeg';
    $scope.todos = [
      {
        face : 'action:ic_dashboard_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'social:ic_group_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }/*,
      {
        face : 'communication:ic_message_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'action:ic_delete_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'action:ic_settings_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },*/
    ];
  }]);
  app.controller('myLinksCtrl', function($scope) {
    $scope.mylinks = [
      {
        name: 'Juan',
        lastName: 'Ramirez',
        profile: ''
      },
      {
        name: 'Pedro',
        lastName: 'Escalante',
        profile: ''
      },
      {
        name: 'Maria',
        lastName: 'Agustin',
        profile: ''
      }
    ];
    $scope.goToMyLink = function(item, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Usuario')
          .textContent('Inspect ' + item)
          .ariaLabel('Perfil de Usuario')
          .ok('Neat!')
          .targetEvent(event)
        );
      };
      $scope.doSecondaryAction = function(event) {
         $mdDialog.show(
           $mdDialog.alert()
             .title('Secondary Action')
             .textContent('Secondary actions can be used for one click actions')
             .ariaLabel('Secondary click demo')
             .ok('Neat!')
             .targetEvent(event)
           );
    };
  });
  app.controller('locationSearchCtrl', ['$geolocation','$scope',locationSearchCtrl]);
  function locationSearchCtrl($geolocation,$scope) {
    /*$geolocation.watchPosition({
              timeout: 60000,
              maximumAge: 250,
              enableHighAccuracy: true
      });
      $scope.myCoords = $geolocation.position.coords;*/
      var map;
      var geocoder;
      $scope.view = {
        addressInput: '',
        places: [],
        selectedPlace: '',
        markers: []
      };
      inicializeComponents();
      function inicializeComponents() {
        var mapConfig = {
          center: {lat: 14.595679, lng:-90.547002},
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('locationSearchMap'),mapConfig);
        geocoder = new google.maps.Geocoder();
        var marker = new google.maps.Marker(
          {
            position: {lat: 14.595679, lng:-90.547002},
            optimized: false,
            title: "Sharolin Lupita Lacunza Gonz!!"
          }
        );
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow(
          {
            content: 'Lupita'
          });
          marker.addListener('click', function()
          {
            infowindow.open(map, marker);
          });
      }
  }

  app.config(function($mdIconProvider) {
      $mdIconProvider
        // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
        //
        .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
        .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
        .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
        .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
        .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
        .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
        .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
        .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
        .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
        .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
        .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
        .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
        .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
        .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
        .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

        // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
        .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
        .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);
  });
})();

/*
//Implementacion utilizando librerias ubicacion del GPS
app.controller('locationSearchMapGPSCtrl',['$geolocation','$scope',function($geolocation,$scope){
  $geolocation.watchPosition(
    {
      timeout: 60000,
      maximumAge: 250,
      enableHighAccuracy: true
    })
  $scope.$watch('myPosition.coords', function (newValue, oldValue)
  {
    $scope.map = {
      center: {
        latitude: newValue.latitude,
        longitude: newValue.longitude
      },
      zoom: 16
    };
  }, true);

}]);
//Implementacion randomica con posicion quemada usando tambien google-maps
app.controller('locationSearchMapBurnCtrl',function($scope){
  GoogleMapsLoader.load(function(google){
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(54.5767,-1.2355)
    };
    _map = new google.maps.Map(document.getElementById('map'),mapOptions);
  });
});*/
