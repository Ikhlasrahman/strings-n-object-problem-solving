// Task 9.1 — Contact Book
// Convert the email to lowercase and update the object.
// Loop through the contact object and print each key-value pair.
// Add a new property favoriteWords: [] (an array) — push 3 words to it.
// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

// Convert the email to lowercase and update the object.
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

contact.email= contact.email.toLowerCase();
console.log(contact);

// Loop through the contact object and print each key-value pair.
for (let key in contact){
    console.log(key +":"+ contact[key])
}

// Add a new property favoriteWords: [] (an array) — push 3 words to it.
contact.favoriteWords = ['Jhon', 'snow', 'winter', 'is', 'coming']
console.log(contact)

// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
let reverse = contact.name.split('');
console.log(reverse.reverse())

// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
console.log(Object.values(contact).includes('alex@email.com'))

