'use strict';

var app = angular.module('fireoflondonApp');

app.factory('Posts', ['$resource', function ($resource) {
    var Posts = $resource('http://wordpress.fireoflondon.org/wp-json/posts',
        {
            query: {
                isArray: true,
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data.content;
                }
            }
        });
    return Posts;
}]);

app.factory('Post', ['$resource', function($resource) {
  return $resource('http://wordpress.fireoflondon.org/wp-json/posts/:articleId', { articleId: '@articleId'})
}]);

