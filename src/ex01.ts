// 1. Create a generic arrow function called `getFirstElement` that accepts an array of any type 
// and returns the first element of the array. 
// Pass an array of strings ["Hello", "World"] and log the result.

const getFirstElement = <T>(arr: T[]): T | undefined => arr[0];

const result = getFirstElement(["Hello", "World"]);

console.log(result); // Expected output: "Hello"