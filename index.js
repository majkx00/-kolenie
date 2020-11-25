// Variables show //

// int - ee
// char - ee
// string - ee 
// boolean - ee
// float - ee

let variable = 0; // that's right
variable = "Ejha";
variable = 1.1516564;

let nula = 0;
variable = "0";

console.log(nula == variable);
console.log(nula === variable);

// if, else, else if, switch, while, do 
let number = 255; // 1-5

switch (number) {
  case 5:
    console.log("Mame cislo 5");
    break;
  case 4:
    console.log("Mame cislo 4");
    break;
  case 3:
    console.log("Mame cislo 3");
    break;
  case 2:
    console.log("Mame cislo 2");
    break;
  case 1:
    console.log("Mame cislo 1");
    break;
  default :
    console.log("Cislo mimo rozsah");
    break;
}

if (number === 5) {
  console.log("Mame cislo 5");
} else if (number === 4) {
  console.log("Mame cislo 4");
} else if (number === 3) {
  console.log("Mame cislo 3")
} else if (number === 2) {
  console.log("Mame cislo 2")
} else if (number === 1) {
  console.log("Mame cislo 1")
}

//variable : nula ? null

let name = "igor";
let result = name ? name : "Jozko";
console.log(result);

// Function

function sub(cislo, b) {
  return cislo + b;
}

console.log("2+2 = ", sub(2, 2));

// Arrow function

// ----- Object show ------ // 

const Dog = require("./dog");
let doggo = new Dog("Dunco", "Haf");
let murko = new Dog("Murko", "Mnau");

console.log(murko.getName());
console.log(murko.doSound());

// ------ Array itteration show -------- //
let randomArray = ["Pes", "Macka", "Zirafa", "Opica", "Mys"];

// First way

for (let i = 0; i < randomArray.length; i++) {
  console.log("randomArray[i] : ", randomArray[i]);
}

// Second way
for (let animal of randomArray) {
  console.log("Animal : ", animal);
}

// Third way 
randomArray.forEach(item => {
  console.log("Item : ", item);
})

// Array find value //
let found = randomArray.find(item => item === "Zirafa");
console.log("Found : ", !!found);

// Map
// randomArray.map()
let finalArray = [];
let id = 0;

randomArray.map(item => {
  finalArray.push({ id: id, item: item });
  id++;
})
console.log("Final array : ", finalArray);


// -------- Array of objects show ---------- //


let itemList = [
  { id: 123, title: "Ing", name: "Franta", wage: 1500 },
  { id: 258, title: "Mgr", name: "Jozko", wage: 1250 },
  { id: 354, name: "Matej", wage: 520 },
  { id: 654, title: "Bc.", name: "Peto", wage: 640 }
]

// Itterate through objects
for (let person of itemList) {
  console.log("Mena : ", person.name);
}

// Filter persons with specific conditions
let goodPersons = [];
itemList.filter(person => {
  if (person.wage > 1000) goodPersons.push(person);
})

console.log("Good Persons :", goodPersons);

// Edit persons wage - various approach // 

// Old school
for (let i = 0; i < itemList.length; i++) {
  itemList[i].wage += 250;
}

console.log("First update itemList : ", itemList);

// For..what ?
for (let person of itemList) {
  person.wage += 250;
}
// Pouzit pri asynchronnych volaniach !!!

console.log("Second update itemList : ", itemList);

// Javascript at it's finest
itemList.forEach(person => {
  person.wage += 250;
})

console.log("Third update itemList : ", itemList);

// filter objects

for (let person of itemList) {
  if(person.title) person.wage +=100;
}

console.log("Fourth update itemList : ", itemList);

// Merge objektov

let object1 = {
  id: 123,
  name: "Patrik",
  surname: "Vysnan",
  age: 15,
  wage: 350
}

let object2 = {
  age: 16,
  wage: 375,
  married: false
}

let finalObject = {...object1, ...object2};
delete finalObject.age;

console.log("Merged Objects : ", finalObject)
