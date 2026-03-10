const prompt = require ('prompt-sync')();
function addNumbers(a, b) {
    let sum = a + b;
    return sum; 
}

let x = Number( prompt("enter first value:"));
let y = parseInt(prompt("enter your 2nd value:"));
let result = addNumbers(x, y);
console.log("The sum of " + x + " and " + y + " is:"+result);