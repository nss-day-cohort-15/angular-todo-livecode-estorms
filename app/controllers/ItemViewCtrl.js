"use strict";
//$routeParams give access to whatever is in URL bar
app.controller("ItemViewCtrl", function ($scope, ItemStorage, $routeParams ){
    $scope.items = [];

    ItemStorage.getItemList()
    .then( (itemCollectionArr) => {
        $scope.items = itemCollectionArr;

        $scope.selectedItem = $scope.items.filter(function(item){
            return item.id === $routeParams.itemId;
        })[0]; //filter returns an array, always, so have to select [0] for first object (this is an array that contains one object)
    });
});
