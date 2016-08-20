/**
 * Created by LiemDT1 on 2016/08/20.
 */
(function () {

    var injectParams = ['$rootScope', '$http'];

    var ListCtrl = function ($rootScope, $http) {
        var vm = this;

        vm.filter = function (pokemon) {
            if(!vm.type) return true;
            if(pokemon.Type1 === vm.type || pokemon.Type2 === vm.type) {
                return true;
            }
        }
    };

    ListCtrl.$inject = injectParams;

    angular.module('pokedex')
        .controller('ListCtrl', ListCtrl);

}());