/**
 * Created by elporfirio on 01/04/2016.
 */

angular.module('miApp', [])
.controller('EtadoController', ['$scope',function($scope){

  var self = this;

  $scope.algo = "nuevo";

  $scope.nuevo = function(param1, param2){
    return param1 * param2;
  };

  self.otro = function(param1, param2){
    return param1 * param2;
  };

  self.nuevo = function(){
    console.info("hola perros");
  }
}]);