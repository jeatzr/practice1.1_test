import StudentCollection from "./StudentCollection.js";

//  Initialize the collection with some students
const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

//  Create a new StudentCollection object
const studentCollection = new StudentCollection(students);

const emptyStudentCollection = new StudentCollection();

console.log(studentCollection);
console.log(emptyStudentCollection);

// Find a student by name and show in the screen





studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

// Find the top student based on grades
//const topStudent = studentCollection.getTopStudent();
//console.log("Top student:", topStudent);

// TASK: test all the methods you have created:

// Serialize the students to JSON
//const serializedData = studentCollection.serializeStudents();
//console.log("Serialized Data:", serializedData);

//  Deserialize the JSON back into the collection
//studentCollection.deserializeStudents(serializedData);
//console.log("Deserialized Data:", studentCollection.students);
