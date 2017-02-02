var key = "ow4ey8A3VljTDJ9LSW8y4QAxG4V0FdP4J6TWiF6I";
var myApp = angular.module('practice', []);

myApp.controller('practiceCtrl', ['$http', function($http) {
  var ctrl = this;
  ctrl.collegeName = "Name of College";

  ctrl.getData = function(){
    console.log(encodeURIComponent(ctrl.collegeName));

    $http({
      method: 'GET',
      url: 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=' + key + '&school.name=' + encodeURIComponent(ctrl.collegeName)
    }).then(function(data){
      console.log(data.data.results);
      ctrl.data = data.data.results;
    }, function(data){
      console.log(data.data.errors);
    });
  }

}]);
