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
};

});
