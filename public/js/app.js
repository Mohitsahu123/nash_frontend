
var psApp=angular.module('myApp',['ui.router','ngCookies','ngProgressLite','cgNotify','LocalStorageModule','ngAnimate']);

psApp.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
       
        .state('home',{
            url:'/dashboard',
            templateUrl:'home.html'
        })
        .state('/', {
            url: '/',
            controller: 'indexController'
        })
       
        .state('dynstate',{
            url : '/{id}?{locale}&{survey_id}',
            templateUrl: function (stateParams){
                return   stateParams.id + '.html';
            }
        })
        .state('404',{
            url : '/404',
            templateUrl: '404.html'
        })
        
        
}]);


psApp.run(['$rootScope','$location','$state','$window','$cookies', 'notify',  '$timeout', function($rootScope, $location, $state, $window,  $cookies, notify, $timeout) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        
        $rootScope.$state = $state;
        if (toState != null && toState.access != null ) {
            event.preventDefault();
            $state.go("login");
        }
        if(toState != null &&  toState.url!=null && (toState.url=='/' || toState.url=='') ) {
            event.preventDefault();
            $state.go("home");

        }
        if(toState.url=="/login"){
            $window.location.href="/#/";
        }

       
       
    });

}]);



