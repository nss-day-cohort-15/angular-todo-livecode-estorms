"use strict";

app.controller("ItemListCtrl", function ($scope, ItemStorage, searchTermData) {
    $scope.searchText = searchTermData;
    ItemStorage.getItemList()
    .then((itemCollection) => {
        $scope.items = itemCollection;

    });
});
