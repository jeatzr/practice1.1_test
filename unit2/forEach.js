const ratings = [5, 4, 5, 1];
let sum = 0;

const sumFunction = (a, b) => a + b;

ratings.forEach((element) => {
  console.log(element);
  sum = sumFunction(sum, element);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
