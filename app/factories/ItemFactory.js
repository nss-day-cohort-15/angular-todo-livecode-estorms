"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

let getItemList = () => {
    let items = [];
    return $q( (resolve, reject) => {    //Instead of returning a new promise via $ajax syntax, use this syntax instead: $q = new Promise
        $http.get(`${FirebaseURL}/items.json`) //$http = $.ajax({
        //     url: .....json
        // })
        .success((itemObject) => { //Receive an object from Firebase, object contains each item list inside
            Object.keys(itemObject).forEach((key) => { //Takes every key in an object passed in and makes an array of each key. So we create an array of each FB item--doable because there's only one key in each object w/in larger/single Firebase object, and that's the object ID (aka name)
                itemObject[key].id = key; //Here we are setting a property on each object called id and making it synonymous with the object's name/sole key in larger Firebase object; SET A PROPERTY ON EACH ITEM OBJECT, AS IDENTIFIED BY ITS KEY, SYNONYMOUS WITH THAT KEY
                items.push(itemObject[key]); //Here we are pushing each each object into array
            });

            resolve(items); //Here we resolve: we officially have itemObject
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

let getSingleItem = (itemId) => {
    return $q ( (resolve, reject) => {
        $http.get(`${FirebaseURL}/items/${itemId}.json`)
        .success( ( singleItem ) => {
            resolve (singleItem);
          });
    });
};

let editItem = (itemId, editedItem) => {
        return $q ( (resolve, reject) => {
            $http.patch(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedItem))
            .success( (result) => {
               resolve(result);

        });
    });
};





    return {getItemList, postNewItem, deleteItem, editItem, getSingleItem}; //Have to return getItemList method as an object to access it elsewhere ==> curly braces/object return are an indicator of modularity (like module.exports/require syntax in browserify?)
});

/*Have to set up the route view for edit item; edit item ctrl needs to equate firebase ID'ed object with obj built in edit item html; function at end of edit item html needs to send new obj to Firebase through patch established in factory*/
