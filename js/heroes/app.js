var heroes = angular.module('heroes', ['firebase']);

heroes.controller('HeroController', ['$scope', 
  function($scope){
    $scope.heroes = [];
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

heroes.directive('heroCreator',function(){
  return {
    scope: {
      addNewHero: "=",
    },
    controller: ['$scope', 'newHeroFactory',
      function($scope, newHeroFactory){
        $scope.hero = newHeroFactory();
        
        $scope.add = function(){
          $scope.addNewHero($scope.hero);
          $scope.hero = newHeroFactory();
        }
      }
    ],
    templateUrl: 'frags/hero_add.html'
  }
});
