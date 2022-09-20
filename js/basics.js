for (let i = 0; i < 10; i++) {
  console.log("hi");
}

console.log(false || true);

function printName(name) {
  name = name || "Default";
  console.log(name);
}
printName("Badhone");

localStorage.setItem("name", "Badhon");
