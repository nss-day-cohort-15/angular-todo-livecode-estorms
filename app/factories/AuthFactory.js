"use strict";

app.factory("AuthFactory", function ($window) {

let createUser = function (userObj){
   return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password) //here we create our own method on a built-in FB method (auth)
   .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
   })
   //returning a promise, but we don't have to write it, because they're already embedded as Firebase methods. We have universal access to firebase through link in index.html
}

    let loginUser = function (userObj) {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        // .then((userObj)=> console.log(userObj.uid))
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
        })
    };

    let logoutUser = function () {
        return firebase.auth().signOut();
    }

    return {createUser, loginUser, logoutUser}

});
