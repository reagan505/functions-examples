const test = document.getElementById("test");
test.innerText = "REAGAN";

// create a new element
const newItem = document.createElement("h1")

const headingTitle = document.createTextNode("this is a new element")

newItem.appendChild(headingTitle);

const printToDom = document.getElementById("newElement");

printToDom.appendChild(newItem);


// assignment
// -create a new element that prints out your favorite dish ,pets ,colors
// -make sure to push this code to github

// assignment 1
const food = document.createElement("h2")
const FavDish = document.createTextNode("favorite dish : chapati ,eggs and rice")

food.appendChild(FavDish);

const printToDom2 = document.getElementById("FavDish");

printToDom2.appendChild(food);


// assignment 2
const pet = document.createElement("h3")
const FavPet = document.createTextNode("my favorite pet is lion")

pet.appendChild(FavPet);

const printToDom3 = document.getElementById("FavPet")
printToDom3.appendChild(pet);

// assignment 3
const color = document.createElement("p")
const FavColor = document.createTextNode("my favorite color is blue")

pet.appendChild(FavColor);

const printToDom4 = document.getElementById("FavColor")
printToDom4.appendChild(color);
