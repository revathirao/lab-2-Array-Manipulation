
// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.
let shoppingList =[]

// ________________________________________________________

// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.

// function addItem(item){
//   shoppingList.push(item)
//   console.log("Item added to the array " ,item);
//   console.log("Updated shoppingList ", shoppingList);
// }
// addItem("apple")
// addItem("peach")
// addItem("Blueberry")
// addItem("Banana")
// addItem("Chocholate")
// addItem("butter")
// addItem("milk")

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
// ____________________________________________________________________

// Write a function called displayList that logs all items in the shoppingList array to the console.

// function displayList() {
//     if (shoppingList.length === 0) {
//         console.log("Shopping cart is emplty");
//     } else {

//         for (let i = 0; i < shoppingList.length; i++) {
//             shoppingList[i]; //Displays each item
//         }
//         console.log("Entire list:", shoppingList);
//     }
// }
// displayList()

// _________________________________________________________
// ____________________________________________________________

// Task 2: Filter and Search an Array
// Modify the addItem function to only add the item if it is not already in the shoppingList array.

// shoppingList =  ['apple', 'peach', 'Blueberry', 'Banana' ]
// function addItem(searchItem) {
//     if (!shoppingList.includes(searchItem)) {
//         shoppingList.push(searchItem)

//     } else {
//     console.log("items are already there in the shopping list");

//     }
//     console.log("Entire list:", shoppingList);
// }

// addItem("apple")
// addItem("butter")

// _______________________________________________//


// Write a function called filterItems that takes a search term as a parameter and returns all items
//  in the shoppingList that contain that search term (case-insensitive).

// shoppingList =['apple', 'peach', 'Blueberry', 'Banana', 'Chocholate', 'butter' ]

// function filterItems(searchItem){

//     let result = shoppingList.filter(item =>item.toLowerCase().includes(searchItem.toLowerCase()))
//     console.log("Filtered Shopping list", result);
//     return result
// }

// filterItems("b")
// filterItems("apple")

//________________________________________________________//
//_________________________________________________________//

// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

let cart = []
let inputItem = document.getElementById("item-input")
let addItemButton = document.getElementById("addItemButton")
let removeItemButton = document.getElementById("removeItemButton")
let cartList = document.getElementById("cart")

// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.

function addItemToCart() {
    let item = inputItem.value
    if (item === "") {
        alert("Enter the item input")
        return
    } else {
        cart.push(item)
        displaycartList()
        inputItem.value ="" //clear item
    }
}

// Write a JavaScript function that renoves items to the array and updates the displayed list dynamically when the button is clicked.

function removeItemFromCart() {
    if (cart.length === 0) {
        alert("There is no Items to remove")
        return
    } else {
        cart.pop()
        displaycartList()
    }
}

// Write a JavaScript function that displays items in the cart

function displaycartList() {
    cartList.innerHTML = ""

    if (cart.length === 0) {
        console.log("Shopping cart is emplty")
    } else {
        for (let i = 0; i < cart.length; i++) {
            let listItem = document.createElement("li")
            listItem.innerText = cart[i]
            cartList.appendChild(listItem)
        }
    }

}   
// Attach event listeners
    addItemButton.addEventListener("click", addItemToCart)
    removeItemButton.addEventListener("click", removeItemFromCart)