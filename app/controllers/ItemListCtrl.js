"use strict";

app.controller("ItemListCtrl", function ($scope, $location, ItemStorage, searchTermData) {
    $scope.searchText = searchTermData;
    ItemStorage.getItemList() //Here we're calling to method ( getItemList() within the factory )
    .then((itemCollectionArr) => {
        console.log("item collection", itemCollectionArr);
        $scope.items = itemCollectionArr;

    });

    $scope.itemDelete = (itemId) => {
        ItemStorage.deleteItem(itemId)
        .then( (response) => {
            ItemStorage.getItemList()
            .then( (itemCollectionArr) => {
            $scope.items = itemCollectionArr;
             });
        });
    };
  });

