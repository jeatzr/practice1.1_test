const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
];

users.forEach(function (user) {
  console.log(`${user.name} is ${user.age} years old.`);
});

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
