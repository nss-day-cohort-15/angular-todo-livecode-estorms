"use strict";

app.factory("AuthFactory", function ($q) {

let createUser = function (userObj){
   return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password) //method on built-in FB method
   .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
   })
   //returning a promise, but we don't have to write it, because they're already embedded as Firebase methods. We have universal access to firebase through link in index.html
    };

    let loginUser = function (userObj) {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
        })
    }

    return {createUser, loginUser}

});
