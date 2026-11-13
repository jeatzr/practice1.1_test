let string1 = "HELLO";
let string2 = "WORLD!! here am I";

let helloWorld = string1 + " " + string2;

console.log(helloWorld);
console.log(helloWorld.toLowerCase().includes("world"));

let words = helloWorld.split(" ");
console.log(words);

let firstName = "Jose";
let lastName = "Atiénzar";
let age = 46;

// template literal
let listTemplate = `<ul> 
                  <li>
                    ${firstName}
                  </li>
                  <li>
                    ${lastName}
                  </li>
                  <li>
                    Age: ${age}
                  </li>
                </ul>`;

console.log(listTemplate);
