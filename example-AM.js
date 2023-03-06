"use strict";
let fruit = ["apple", "banana", "cherry", "date"];
// Push method adds new element to end of array
fruit.push("elderberry");
console.log(fruit); // Output: ["apple", "banana", "cherry", "date", "elderberry"]
// Pop method removes and returns the last element of array
let lastFruit = fruit.pop();
console.log(lastFruit); // Output: "elderberry"
// Shift method removes and returns the first element of array
let firstFruit = fruit.shift();
console.log(firstFruit); // Output: "apple"
// Unshift method adds new element to beginning of array
fruit.unshift("apricot");
console.log(fruit); // Output: ["apricot", "banana", "cherry", "date"]
// Slice method returns a new array with selected elements
let slicedFruits = fruit.slice(1, 3);
console.log(slicedFruits); // Output: ["banana", "cherry"]
// Splice method removes or replaces selected elements in array
fruit.splice(1, 1, "blueberry");
console.log(fruit); // Output: ["apricot", "blueberry", "cherry", "date"]
// Concat method joins two or more arrays and returns a new array
let moreFruits = ["fig", "grape", "honeydew"];
let allFruits = fruit.concat(moreFruits);
console.log(allFruits); // Output: ["apricot", "blueberry", "cherry", "date", "fig", "grape", "honeydew"]
// Includes method checks if an element is in the array and returns a boolean
let includesCherry = fruit.includes("cherry");
console.log(includesCherry); // Output: true
// IndexOf method returns the first index of an element in the array, or -1 if not found
let indexCherry = fruit.indexOf("cherry");
console.log(indexCherry); // Output: 2
// Join method converts the array to a string with elements separated by a specified separator
let joinedFruits = fruit.join("-");
console.log(joinedFruits); // Output: "apricot-blueberry-cherry-date"
// Reverse method reverses the order of elements in the array
fruit.reverse();
console.log(fruit); // Output: ["date", "cherry", "blueberry", "apricot"]
// Sort method sorts the elements in the array in alphabetical order
fruit.sort();
console.log(fruit); // Output: ["apricot", "blueberry", "cherry", "date"]
