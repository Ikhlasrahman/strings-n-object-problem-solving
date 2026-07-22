// Task 3.2 — Combine Strings

// Use .concat() to join "Hello" and "World" into "Hello World".
// const hello = "Hello"
// const world = "World"
// const result = hello.concat(' ',world);
// console.log(result)

// Use + and template literals to do the same thing. Compare all three approaches.
const hello = "Hello"
const world = "World"

const concatResult = hello.concat(' ',world);
const plusResult = hello + " " + world;
const result = `${hello} ${world}`

console.log(concatResult)
console.log(plusResult)
console.log(result)