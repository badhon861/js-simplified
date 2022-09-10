let car = {
  make: "Toyota",
  Model: "Fielder",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};

car.make;
car.isUsed;
car.makeNoise();

function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

const user1 = createUser("Sarah", 5);
user1;

const user2 = createUser("Badhon", 36);
user2;
