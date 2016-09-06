"use strict";

app.controller("LoginCtrl", function ($scope, $window, AuthFactory) {
    $scope.account = {
        email: '',
        password: ''
    };

    $scope.register = () => {
        console.log("you clicked register");
        AuthFactory.createUser ({
            email: $scope.account.email,
            password: $scope.account.password
        })
        .then( (userData ) => {
        console.log("new User", userData);
        if(userData) {
        $scope.login();
        }
    })
        .catch((error) => {
            console.log(`error creating user: ${error}`);
        })

}
    $scope.login = () => {
        console.log("you clicked login");
        AuthFactory.loginUser($scope.account)
        .then( (data ) => {
            if (data) {
                $window.location.href = "#/items/list"
                console.log(data)
            }
            else {
               $window.location.href = "#/login"
            }

            })
        }
});
