"use strict";

var app = angular.module('TodoApp', ['ngRoute'])
            .constant('FirebaseURL', 'https://todolist-anglr.firebaseio.com');


let isAuth = (AuthFactory)=> new Promise((resolve, reject)=> {
    if(AuthFactory.isAuthenticated()){
      console.log('User logged in');
      resolve();
    } else {
      console.log('User not logged in');
      reject();
    }
  });

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl',
    resolve: {isAuth}
  })
  .when('/items/new',{
    templateUrl: 'partials/item-form.html',
    controller: 'ItemNewCtrl'
  })
  .when('/items/view/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl',
    resolve: {isAuth}
  })
  .when('/items/edit/:itemId', {
    templateUrl: 'partials/item-edit.html',
    controller: 'ItemEditCtrl',
    resolve: {isAuth}
  })
  .otherwise('/');
});

app.run(($location, FBCreds)=> {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };

  firebase.initializeApp(authConfig);
});
