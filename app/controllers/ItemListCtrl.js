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
     //  $scope.itemEditView = (itemId) => {
     //    $location.url(`/items/edit/${itemId}`); //pathing the view to item edit. THAT'S what location does ... but why can't we do NG-VIEW here?
     // };
  });

