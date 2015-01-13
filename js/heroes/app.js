var heroes = angular.module('heroes', []);

heroes.controller('HeroController', ['$scope', 
  function($scope){
    $scope.heroes = ['spiderman', 'batman'];
  }
]);

heroes.directive('heroList', function(){
  return {
    templateUrl: 'frags/hero_list.html'
  }
});
