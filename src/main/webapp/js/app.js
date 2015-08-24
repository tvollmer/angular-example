define(function(require){

    'use strict';

    var angular = require('angular');
    var ngRoute = require('angular-route');
    //var ngResource = require('angular-resource');
    var services = require('./service/services');
    var controllers = require('./controller/controllers');
    var directives = require('./directive/directives');

    //var app = angular.module('likeastore', ['services', 'controllers', 'directives']);
    var app = angular.module('likeastore', ['ngRoute','services','controllers','directives']);

    app.start = function () {
        angular.bootstrap(document, ['likeastore']);
    };

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {

            // TODO : if the browser says http://localhost:8080/angular-example/view1, then the user refreshes, they get a nasty 404
            $routeProvider
                .when('/', { templateUrl: 'partials/message.html', controller: 'homeController' })
                .when('/view1', { templateUrl: 'partials/message.html', controller: 'view1Controller' })
                .when('/view2', { templateUrl: 'partials/message.html', controller: 'view2Controller' })
                .when('/view3', { templateUrl: 'partials/message.html', controller: 'view3Controller' })
                .otherwise({ redirectTo: '/' })
            ;

            $locationProvider.html5Mode(true);
        }
    ]);

    app.run(function($window){

    });

    return app;
});