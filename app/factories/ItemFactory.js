"use strict";

app.factory("ItemStorage", ($q, $http) => {

let getItemList = () => {
    let items = [];
    return $q( (resolve, reject) => {    //instead of return new promise, use this
        $http.get("../../data/dataList.json")
        .success((itemObject) => {
            resolve(itemObject);
        })
        .error((error) => {
            reject(error);
        });
    });
};
    return {getItemList};
});
