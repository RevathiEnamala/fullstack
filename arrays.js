const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Apple

fruits.push("Mango");   // Adds Mango to the end
const upperFruits = fruits.map(f => f.toUpperCase()); // ["APPLE", "BANANA"...]

console.log(upperFruits);
