// Task 8.1 — Loop Through Properties
// Use a for...in loop to log each key and value like: math: 90.
// Calculate the average of all values in the loop.

let scores = {
  math: 90,
  science: 85,
  art: 95,
};

let total = 0;

for (let key in scores) {
  console.log(key, ":", scores[key]);
  total = scores[key] + total;
}

console.log(total / Object.keys(scores).length);
