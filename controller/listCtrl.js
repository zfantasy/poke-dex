/**
 * Created by LiemDT1 on 2016/08/20.
 */
(function () {

    var injectParams = ['$rootScope', '$http'];

    var ListCtrl = function ($rootScope, $http) {
        var vm = this;
        $http.get('data/pokemon.json')
            .then(function(res){
                vm.pokemons = res.data;                
                });
    };

    ListCtrl.$inject = injectParams;

    angular.module('pokedex')
        .controller('ListCtrl', ListCtrl);

}());