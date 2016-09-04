"use strict";

app.controller("ItemEditCtrl", function ($scope, $routeParams, $location, ItemStorage) {
    ItemStorage.getSingleItem($routeParams.itemId)
    .then((singleItem) => {
        $scope.editTask = singleItem;

    });

$scope.editItem = (itemObj) => {
    ItemStorage.editItem(itemObj.id, itemObj)
    .then((response) =>{
      console.log(response);
      $location.url('/items/list');
    });
  };

});
