var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'Partials/enter-info-partial.html',
            controller: 'myController'
        })

        .state('bracket', {
            url: '/bracket',
            templateUrl: 'Partials/Created-Bracket.html',
            controller: 'myController'
        })
    
        .state('welcome', {
            url: '/',
            templateUrl: 'Partials/welcome-partial.html',
            controller: 'myController'
            
        });

});