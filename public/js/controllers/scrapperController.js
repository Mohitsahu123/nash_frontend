
angular.module('myApp')
    .controller('scrapperCntrl',['$scope','$http','$state','notify','ngProgressLite', 'scrapperService',function($scope, $http, $state, notify,  ngProgressLite, scrapperService){
         listKeyword();
         $scope.apiBaseUrl = "http://localhost:3000/"
          function listKeyword(){
            ngProgressLite.start();
            scrapperService.listKeyword().success(function (data) {
                ngProgressLite.done();
                $scope.keywords=data;
            }).error(function (err) {
                notify({message:err.msg,classes:'alert-danger',duration:3000} );
            })
        }

       
          $scope.getImagesByKeyword = function (keyword) {
            ngProgressLite.start();
            scrapperService.getImagesByKeyword(keyword.keyword).success(function (data) {
                ngProgressLite.done();
                $scope.imagesArr=data.images_path;
            }).error(function (err) {
                notify({message:err.msg,classes:'alert-danger',duration:3000} );
            })
        
        }

      
    }]);