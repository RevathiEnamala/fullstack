let name = "Alice"; 
let age = 25;
let pi = 3.14159;
let hugeNumber = 9007199254740991n;
let isLearning = true;
let favoriteColor;
let job = null;
let id = Symbol("id");

let user = {
    firstName: "Alice",
    lastName: "Doe"
};

let colors = ["Red", "Green", "Blue"];


function greet() {
    return "Hello World!";
}

console.log("--- Primitive Types ---");
console.log("String:", name, "| Type:", typeof name);
console.log("Number:", age, "| Type:", typeof age);
console.log("BigInt:", hugeNumber, "| Type:", typeof hugeNumber);
console.log("Boolean:", isLearning, "| Type:", typeof isLearning);
console.log("Undefined:", favoriteColor, "| Type:", typeof favoriteColor);
console.log("Null:", job, "| Type:", typeof job); // Note: returns "object" (known JS bug)

console.log("\n--- Object Types ---");
console.log("Object:", user, "| Type:", typeof user);
console.log("Array:", colors, "| Type:", typeof colors);
console.log("Function:", greet(), "| Type:", typeof greet);