"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

let getItemList = () => {
    let items = []; //not sure why we're using this empty array here, doesn't seem necessary from the way the promise is set up, which returns getItemLis and within get ItemList the itemObject = data needed within the purview of associated controller
    return $q( (resolve, reject) => {    //instead of return new promise, use this syntax instead: $q = new Promise
        $http.get(`${FirebaseURL}/items.json`) //$http = $.ajax({
        //     url: .....json
        // })
        .success((itemObject) => { //receive an object from Firebase, object contains each item list inside
            Object.keys(itemObject).forEach((key) => { //takes every key in an object passed in and makes an array of each key, creates an array of each FB item, because there's only one key in each object w/in firebase object, and that's the object ID( properties within)
                itemObject[key].id = key; //setting property on each object called id
                items.push(itemObject[key]); //pushing each each object into array
            });
           //equivalent to .done(itemObject = data returned)
            resolve(items); //resolve(we officially have itemObject)
        })
        .error((error) => {
            reject(error);
        });
    });
};

let postNewItem = function (newItem){
    return $q(function(resolve, reject){
        $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
            .success( (ObjFromFirebase) =>{
                resolve(ObjFromFirebase); //
            })
            .error( (error) => {
                reject(error);
            });
    });
};

let deleteItem = (itemId) => {
    return $q( (resolve, reject) => {
        $http.delete(`${FirebaseURL}/items/${itemId}.json`)
        .success( (objFromFirebase) => {
            resolve(objFromFirebase);
        });
    });
};
    return {getItemList, postNewItem, deleteItem}; //have to return getItemList method as an object to access it elsewhere ==> curly braces/object return are an indicator of modularity (like module.exports/require syntax in browswerify?)

});
