"use strict";
// 3. Create a generic arrow function called `createPair` that accepts two arguments of different types
// and returns them as a tuple/array. 
// Pass `true` and `42` as arguments and log the result.
const createPair = (first, second) => [first, second];
const result = createPair(true, 42);
console.log(result); // Expected output: [true, 42]