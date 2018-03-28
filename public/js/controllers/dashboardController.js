angular.module('myApp')
.controller('dashCtrl',['$scope','$http','$state', 'notify', 'ngProgressLite',  '$rootScope','$stateParams', 
  'scrapperService', function($scope, $http, $state,  notify,  ngProgressLite,  $rootScope , $stateParams, scrapperService){

    $scope.dashObj ={};
      
    $scope.saveImagesByKeyword = function (keyword) {
        ngProgressLite.start();
       
        scrapperService.saveImagesByKeyword($scope.dashObj).success(function (data) {
            ngProgressLite.done();
            notify({message:data.msg,classes:'alert-success',duration:3000} );
        }).error(function (err) {
            notify({message:err.msg,classes:'alert-danger',duration:3000} );
        })
    }

}]);
