var heroes = angular.module('heroes');

heroes.factory('newHeroFactory', function(){
  return function() {
    return {
      name: null,
      superpower: null,
      alterEgo: null,
    }
  }
});
