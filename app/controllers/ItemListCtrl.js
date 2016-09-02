"use strict";

app.controller("ItemListCtrl", function ($scope, ItemStorage, searchTermData) {
    $scope.searchText = searchTermData;
    ItemStorage.getItemList() //here we're calling to method ( getItemList() within the factory )
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
