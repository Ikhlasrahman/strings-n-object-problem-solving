// Task 7.2 — Nested Objects
//Log the city using dot notation chaining.
// Add a country property inside the address.
// Delete the zip property from the nested object.

let user = {
    username:"code123",
    address:{
        city:"Austin",
        zip:"7801"
    }
}
console.log(user.address.city);
user.address.country ="Banglsdesh";
console.log(user)

delete user.address.zip;
console.log(user);