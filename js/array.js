const a = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(a[0][3]);
console.log(a[1][2]);
console.log(a[2][0]);

// Array methods

// join()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsNew = fruits.join(" - ");

fruitsNew;

// toString()

fruitsNewTwo = fruits.toString();

fruitsNewTwo;

// unshift() and shift()

const userNames = ["Badhon", "Masum", "Parvez"];
userNames.unshift("Sarah");
userNames;
userNames.shift();
userNames;

// Change element using the index number

const rollNumber = [1, 2, 3, 4, 5];
rollNumber[2] = 9;
rollNumber;

// Array length

rollNumber.length;

// Array slice() method sliced out a piece of an array into a new array

const animal = ["dog", "cat", "cow", "Rat"];

const newAnimal = animal.slice(2);

// Array splice() method can be used to add new items in array
// The splice() method returns an array with the deleted items
