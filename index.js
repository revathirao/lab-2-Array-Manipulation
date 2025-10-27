
// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.
let shoppingList =[]

// ________________________________________________________

// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.

function addItem(arr1){
  shoppingList.push(arr1)
  console.log("Item added to the array " ,arr1);
  console.log("Updated shoppingList ", shoppingList);
}
addItem("apple")
addItem("peach")
addItem("Blueberry")
addItem("Banana")
// _______________________________________________________________

// Write a function called removeLastItem that removes the 
// last item from the shoppingList array.
// function removeLastItem(){

//     if(shoppingList.length >0){
//             console.log("Original shopping list before removing",shoppingList );
//             shoppingList.pop() //removes last element in the array
//             console.log("Updated  new shoppingList ", shoppingList);
//     }else{
//         console.log("The array is already empty.");
//     }
// }
// removeLastItem()
// // ____________________________________________________________________

// Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList() {
    if (shoppingList.length === 0) {
        console.log("Shopping cart is emplty");
    } else {

        for (let i = 0; i < shoppingList.length; i++) {
            shoppingList[i]; //Displays each item
        }
        console.log("Entire list:", shoppingList);
    }
}
displayList()

// _________________________________________________________
// ____________________________________________________________