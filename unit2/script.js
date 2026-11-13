// comment

/* console */

console.log("Hello world");

let counter = 0;

console.log(counter);

console.warn("Be careful!"); // warning message
console.error("Fatal error"); // error message

alert("Careful!");

let userInput = prompt("Please enter your name:");
console.log("User entered: " + userInput);

let userConfirmed = confirm("Do you really want to delete this item?");
if (userConfirmed) {
  console.log("User confirmed the action.");
} else {
  console.log("User canceled the action.");
}


