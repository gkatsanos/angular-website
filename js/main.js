$(function () {
  $(".fancybox").fancybox();
});

var websiteApp = angular.module('websiteApp', [
  'ui.router',
  'ngAnimate',
  'galleryService'
]);

websiteApp.directive('myNavigation', function () {
  return {
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/partials/my-navigation.html',
  };
});

websiteApp.directive('home', function () {
  return {
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/partials/home.html',
  };
});

websiteApp.controller('galleryCtrl', ['$scope', 'Photo', '$stateParams',
  function ($scope, Photo, $stateParams) {
    // default to exterior filter if not passed in
    var filter = $stateParams.filter;
    $scope.photos = Photo.query();
    $scope.my = { filter: filter };
  }]);

websiteApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/partials/home.html"
    })
    .state('gallery', {
      url: "/gallery/:filter",
      templateUrl: "/partials/gallery.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "/partials/contact.html"
    });
});