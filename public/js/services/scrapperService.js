

angular.module('myApp')
    .factory('scrapperService',['$http', function($http) {
        var base_url = 'http://localhost:3000/scrapper';
        return {
            getImagesByKeyword: function (keyword) {
                return $http.get(base_url + '/getKeyword/'+keyword);
            },

            listKeyword : function(){
                return $http.get(base_url + '/listKeyword');
            },

            saveImagesByKeyword : function(keyword){
                return $http.post(base_url, keyword);
            }
        }
    }]);
