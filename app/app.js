"use strict";
var app = angular.module("TodoApp", ["ngRoute"])
.constant('FirebaseURL','https://todo-list-67408.firebaseio.com/');
//module takes two arguments: name and array of dependencies
//module has global scope
//controllers (functions) have local/lexical scope

// //app/module is an object upon which we are creating properties
// data in nav controller communicates through scope to template/html/navbar

//ROUTE = URL OF APPLICATION, NOT PATH TO FILES

app.config(function($routeProvider){
    $routeProvider.
        when("/items/list", {
            templateUrl: 'partials/item-list.html',
            controller: "ItemListCtrl"                    //not URL, Url
        }).
        when("/items/new", {
            templateUrl: 'partials/item-form.html',
            controller: "ItemNewCtrl"
        }).
        when('/items/view/:itemId', {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl"
        }).

        when('/items/edit/:itemId', {
        templateUrl: 'partials/edit-task.html',
        controller: 'ItemEditCtrl'
         }).

        otherwise("/items/list");
});
