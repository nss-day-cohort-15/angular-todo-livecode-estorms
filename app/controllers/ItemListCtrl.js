"use strict";

app.controller("ItemListCtrl", function ($scope, ItemStorage, searchTermData) {
    $scope.searchText = searchTermData;
    ItemStorage.getItemList() //here we're calling to method ( getItemList() within the factory )
    .then((itemCollectionArr) => {
        console.log("item collection", itemCollectionArr);
        $scope.items = itemCollectionArr;

    });

    $scope.itemDelete = (itemId) => {
        ItemStorage.deleteItem(itemId)
        .then( (response) => {
            ItemStorage.getItemList()
            .then( (itemCollectionArr) => {
            $scope.items = itemCollectionArr;
             });
        });
    };
    $scope.itemEdit = (itemId) => {
        console.log(itemId);

        //first need to get the item view to display
        //then need to allow the user to edit the item
        //then need to capture the edited item
        //then need to send the edited item to FB
    };
});


// function editMovie(movieData, movieID) {
//   console.log(movieData , '  ', movieID)
//   return new Promise(function(resolve, reject){
//     $.ajax({
//       url: `${url}/movies/${movieID}.json`,
//       type: 'PATCH',
//       data: JSON.stringify(movieData)
//     }).done(function(data){
//         resolve(data);
//     });
//   });
// }

  // fb.editMovie(newRating, movieID)
  //   .then(() => Materialize.toast(`<h6>Movie rating was updated to ${newRating.rating}!</h6>`, 2000))
  // }
