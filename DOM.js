// DOM (Document Object Model)
document.body.style.backgroundColor = "red";
document.getElementById("p").textContent = "hi";

let person = document.getElementsByClassName("people");
Array.from(person).forEach((persons) => {
  persons.style.backgroundColor = "yellow";
});
// for (let persons of person) {
//   persons.style.backgroundColor = "white";
// }

// person[0].style.backgroundColor = "yellow";
// person[1].style.backgroundColor = "white";
// person[2].style.backgroundColor = "lightpink";

let h2El = document.getElementsByTagName("h2");
h2El[0].style.backgroundColor = "green";
h2El[0].style.color = "white";
h2El[0].style.textAlign = "center";
