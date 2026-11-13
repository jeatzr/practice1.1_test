let now = new Date();

console.log(now);
console.log(now.toDateString());
console.log(now.toLocaleDateString());

let year = now.getFullYear();
let month = now.getMonth(); // 0-indexed (July is 6)
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(
  `Current date and time: ${day}/${month + 1}/${year} ${hours}:${minutes}:${seconds}`,
);
