var phonecatApp = angular.module('ngApps', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ]; 
});




var app2 = angular.module('app2', []);

app2.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'This is Phone app 2'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'This is tablest app2'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'This is tablest yapp2'}
  ]; 
});



