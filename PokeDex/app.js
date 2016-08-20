(function(){   
    var app = angular.module('PokeDex', 
        ['ngMaterial', 'ngRoute']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'view/list.html',
            controller: 'ListController'
        });
    })
}())