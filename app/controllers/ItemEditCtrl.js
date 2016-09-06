"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $location, $routeParams){

// $scope.editedTask;

$scope.runItemEdit = function (changedItem) {
 let id = $routeParams.itemId;
 console.log(id)
ItemStorage.editItem(id, changedItem)
.then( () =>
    console.log(changedItem)
    )

//First subsequent function post-editItem-promise: console.log the edited item
 .then(function(){
        $location.url('/item/list');
    })
.then (function () {
    console.log(id)
})
 //Second subsequent function post-editItem-promise: $location changes the url back kick to item/list view:


//NOTICE THAT TO CHAIN YOUR THENS YOU CAN'T USE A SEMI-COLON UNTIL THE VERY LAST ONE

};

});
