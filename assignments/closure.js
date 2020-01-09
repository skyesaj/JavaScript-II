// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let x = 5;
let add = num => {
  let total = num + x;

  let hello = () => `we added ${total}`;

  return hello;
};

let test = add(5);

console.log(test());
