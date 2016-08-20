/**
 * Created by LiemDT1 on 2016/08/20.
 */
(function () {

    var app = angular.module('pokedex',
        ['ngMaterial', 'ngRoute']);

    // Route Config
    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {
            $routeProvider
                .when('/', {
                    controller: 'ListCtrl',
                    templateUrl: 'view/list.html',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
        }]);

    app.run(['$http', '$rootScope', '$mdSidenav',
        function ($http, $rootScope, $mdSidenav) {
            $rootScope.toggleMenu = function () {
                $mdSidenav('left').toggle();
            }
        }]);

}());

