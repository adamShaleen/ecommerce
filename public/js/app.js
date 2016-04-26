angular.module('ecommerce', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "main.html"
        })

        .state("admin", {
            url: "/admin",
            templateUrl: "admin.html"
        });

        $urlRouterProvider
        .otherwise("/main");
});
