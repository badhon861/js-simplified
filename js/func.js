function sum(a, b) {
  console.log(a + b);
}

sum(3, 2);

function sayName(name) {
  console.log(`My name is ${name}`);
}

sayName("Masum");

// Return

function addSum(a, b) {
  return a + b;
}

let s = addSum(5, 6);

console.log(s);

function catName(a) {
  return "Hello" + " " + a;
}

let showName = catName("Dolly");
console.log(showName);

//Passing function inside a function

function printVar(a) {
  console.log(a);
}

function func(x) {
  console.log("Before");
  x("Hello callback");
  console.log("After");
}

func(printVar);

function sumCallback(a, b, callback) {
  callback(a + b);
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum);

// Create a function that takes two parameters.
// 1. name
// 2. callback that prints out what we pass to it
// Take name and append "Hello" to the beginning fo the name
// If I pass in "Masum" it will print "Hello Masum"

function printName(name) {
  console.log(`Hello ${name}.`);
}

function PrintNameCall(a, cb) {
  cb(a);
}

PrintNameCall("Masum", printName);
