const element = document.createElement("h2");
element.innerText = "I've been injected by js";
document.body.appendChild(element);

const divWithId = document.getElementById("div-id");
divWithId.style.color = "red";

//const divWithClass = document.getElementsByClassName("div-class");

// const divWithClassArray = Array.from(myClass);

// divWithClassArray.forEach((div) => {
//   div.style.color = "green";
// });

const divClass = document.querySelectorAll(".div-class");

divClass.forEach((item) => {
  item.style.color = "green";
});/intl/en/about/products

const btn = document.querySelector("[data-btn]");
console.log(btn);

btn.addEventListener("click", (e) => {
  console.log(e);
});

const pageLink = document.querySelector("[data-link]");

pageLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link clicked");
});
