const subjects = ["DWES", "DWEC", "DIW", "Deployment", "Python"];

// I can change the content of elements
subjects[3] = "Despliegue";

// but not the reference to the array
//subjects = ["another", "array"];

subjects.forEach((element, index) => {
  console.log(`subject ${index}: ${element}`);
});
