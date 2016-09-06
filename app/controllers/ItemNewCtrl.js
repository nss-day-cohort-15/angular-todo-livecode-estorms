"use strict";

app.controller("ItemNewCtrl", function ($scope, ItemStorage, $location){
    $scope.newTask = {
        task: '',
        assignedTo: '',
        dependencies: '',
        dueDate: '',
        isCompleted: false,
        location: '',
        urgency: 'normal'
    };


$scope.addNewItem = function () {
    ItemStorage.postNewItem($scope.newTask)
    .then(function(){
        $location.url('/item/list');
    });

    //First we post a new item from the object we have just created, then it goes to the item-list view
};

});
