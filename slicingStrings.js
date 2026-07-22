//Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// Get just the word "Learning" using .slice().


let sentence = "Learning JavaScript is fun!";
let removeWord = sentence.slice(0,8);
console.log(removeWord);

// Get the last 4 characters ("fun!") using .slice() with a negative index.

let reverseWord = sentence.slice(-4);
console.log(reverseWord);
