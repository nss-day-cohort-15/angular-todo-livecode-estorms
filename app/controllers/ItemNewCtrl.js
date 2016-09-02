"use strict";

app.controller("ItemNewCtrl", function ($scope, ItemStorage, $location){
    $scope.newTask = {
        assignedTo: '',
        dependencies: '',
        dueDat: '',
        isCompleted: false,
        location: '',
        task: '',
        urgency: 'normal'
    };


$scope.addNewItem = function () {
    ItemStorage.postNewItem($scope.newTask)
    .then(function(){
        $location.url('/item/list');
    });
};

});
