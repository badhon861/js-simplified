let userIsLoggedIn = false;

// if (userIsLoggedIn) {
//   console.log("User logged in");
// } else {
//   console.log("Please Log In.");
// }

const welcomeMessage = userIsLoggedIn ? "Welcome" : "Please log in";
console.log(welcomeMessage);

const rollNumbers = [2, 5, 8, 9, 10, , 34, 45, 1, 3];

if (rollNumbers.length === 0) {
  console.log("Empty");
} else if (rollNumbers.length < 5) {
  console.log("Small");
} else if (rollNumbers.length < 10) {
  console.log("Medium");
} else {
  console.log("Large");
}

const favoriteAnimal = "cat";

switch (favoriteAnimal) {
  case "cat":
    console.log("Cats are pretty cool");
    break;

  case "dog":
    console.log("They are kinda loud");
    break;

  case "shark":
    console.log("That is an interesting choice");
    break;
  default:
    console.log("That is cool but I am unfamilliar");
}
