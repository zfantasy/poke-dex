/**
 * Created by LiemDT1 on 2016/08/20. */
(function () {

    var app = angular.module('pokedex', 
        ['ngMaterial', 'ngRoute']); 

    // Route Config
    app.config(['$routeProvider', '$locationProvider', '$httpProvider', 
        function ($routeProvider, $locationProvider, $httpProvider) {
            $routeProvider
                .when('/',  {
                    controller:'ListCtrl', 
                    templateUrl:'view/list.html', 
                    controllerAs:'vm'
                })
                .otherwise( {redirectTo:'/'}); 

        $locationProvider.html5Mode(true); 
        }]); 
   app.config(function ($mdIconProvider) {
    $mdIconProvider
       .iconSet('menu', 'images/icons/ic_menu_white_24px.svg', 24)
       .defaultIconSet('images/icons/ic_menu_white_24px.svg', 24); 
   }); 

    app.run(['$http', '$rootScope', '$mdSidenav', 
        function ($http, $rootScope, $mdSidenav) {
            $rootScope.data = {};
            $http.get('data/pokemon.json')
                .then(function (res) {
                    $rootScope.data.pokemons = res.data; 
                }); 
                
            $http.get('data/type.json')
                .then(function (res) {
                    $rootScope.data.types = res.data.Types;                   
                    $rootScope.data.types_dict = res.data.types_dict; 
                }); 

            $rootScope.toggleMenu = function () {
                $mdSidenav('left').toggle(); 
            }
        }]); 

}()); 

