var galleryService = angular.module('galleryService', ['ngResource']);

galleryService.factory('Photo',['$resource',
  function($resource){
    return $resource('gallery.json', {}, {
      query: {method:'GET', params:{}, isArray:true, cache: true}
    });
  }
]);