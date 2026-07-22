// //Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
// Using a for loop that builds the reversed string character by character


// Test all three with "JavaScript" → should return "tpircSavaJ".
// Bonus: Which method do you think is fastest? Why?

// let word = "Banana";
// let wordBreak=0;
// let wordBreak = word.split("");
// console.log(wordBreak.reverse())
// console.log(wordBreak.join(""))
// console.log(word.split("").reverse().join(""));

// Using a for loop that builds the reversed string character by character

let word = "Banana";
let wordBreak=[""];
for (let i=5;i>=0;i--){
    wordBreak = wordBreak+word[i];
    console.log(wordBreak);
}