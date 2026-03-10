const prompt = require('prompt-sync')();
function display(Name, age) {
  console.log("Hello i'm " + Name + ", " + "age:" + age + ".");
}

let nameInput = prompt("What is your name:");
let ageInput = prompt("What is your age:");
display(nameInput, ageInput);