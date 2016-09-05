"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, $routeParams){

// $scope.editedTask;

$scope.runItemEdit = function (changedItem) {
 let id = $routeParams.itemId;
 console.log(id)
ItemStorage.editItem(id, changedItem)
.then( () =>
    console.log(changedItem)
    )};

});
