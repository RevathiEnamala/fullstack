// 1. INPUT: Asking the user for their name
let userName = prompt("What is your name?");

// 2. INPUT: Asking for their birth year
// (Note: prompt always returns a string, so we convert it to a Number)
let birthYear = Number(prompt("What year were you born?"));

// 3. LOGIC: Calculate current age (assuming current year is 2026)
let currentYear = 2026;
let age = currentYear - birthYear;

// 4. OUTPUT: Showing the result in a popup box
alert("Hello " + userName + "! You are " + age + " years old.");

// 5. OUTPUT: Also printing the result to the browser console
console.log("User Name:", userName);
console.log("Calculated Age:", age);