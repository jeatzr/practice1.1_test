console.log(Boolean(234234));
console.log(Boolean(0));
console.log(Boolean(-0));

console.log(Boolean(NaN));
console.log(Boolean(""));

let someWord = "";

if (someWord) {
  console.log("The string is not empty");
} else {
  console.log("The string is empty");
}
