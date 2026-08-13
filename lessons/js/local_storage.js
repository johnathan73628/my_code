// saving data
localStorage.setItem("username", "Gilbert");

localStorage.getItem()

// Retrievng data
const username = localStorage.getItem("username");
console.log(username);

// remove item
localStorage.removeItem();

// update data
localStorage.setItem("username", "John");

//clearing local storage
localStorage.clear()