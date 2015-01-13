var heroes = angular.module('heroes', []);

heroes.controller('HeroController', ['$scope', 
  function($scope){
    $scope.heroes = ['spiderman', 'batman'];
    $scope.addNewHero = function(hero) {
      $scope.heroes.push(hero)
    }
  }
]);

heroes.directive('heroList', function(){
  return {
    templateUrl: 'frags/hero_list.html'
  }
});

heroes.directive('heroCreator', function(){
  return {
    scope: {
      addNewHero:"="
    },
    templateUrl: 'frags/hero_add.html'
  }
});
