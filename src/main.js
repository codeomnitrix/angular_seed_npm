var angular = require("angular");
require("angular-ui-router");

var moduloApp = angular.module("moduloAdmin", ["ui.router"]);

moduloApp.config(["$stateProvider", "$urlRouterProvider", function(sp, urp) {
    urp.otherwise("/login");
    sp.state("login", {
        url: "/login",
        templateUrl: "login.html",
        controller: "loginCtrl"
    });
}]);
require("./services");
require("./controllers");