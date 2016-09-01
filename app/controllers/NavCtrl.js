"use strict";

app.controller("NavCtrl", function($scope, searchTermData, $location) {
    $scope.searchText = searchTermData;
    $scope.navItems = [    //create an array of objects
            {url: "#/logout", name: "Logout"},
            {url: '#/items/list', name: "All Items"},
            {url: '#/items/new', name: "New Items"}
    ];

    $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
//
