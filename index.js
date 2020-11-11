// Variables show //

// int - ee
// string - ee 
// boolean - ee

let variable = 0; // that's right
variable = "Ejha";
variable = 1.1516564;

let nula = 0;
variable = "0";

console.log(nula==variable);

// if, else, else if, switch, while, do 

//variable : nula ? null

// Function

function sub(a, b){
    return a+b;
}

console.log("2+2 = ", sub(2,2));

// Arrow function

// ----- Object show ------ // 

const Dog = require("./dog");
let doggo = new Dog("Dunco", "Haf");

console.log(doggo.getName());
console.log(doggo.doSound());

// ------ Array itteration show -------- // 

let randomArray = ["Pes", "Macka", "Zirafa", "Opica", "Mys"];

// First way 
for(let i=0;i<randomArray.length;i++){
    console.log("randomArray[i] : ", randomArray[i]);
}

// Second way
for(let animal of randomArray){
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
randomArray.map(item => {
    finalArray.push({ item: item});
})
console.log("Final array : ", finalArray);


// -------- Array of objects show ---------- //

let itemList = [
    {id: 123, title: "Ing", name: "Franta", wage: 1500},
    {id: 258, title: "Mgr", name: "Jozko", wage: 1250},
    {id: 354, name: "Matej", wage: 520},
    {id: 654, title: "Bc.", name: "Peto", wage: 640}
]

// Itterate through objects
for(let person of itemList){
    console.log("Mena : ", person.name);
}

// Filter persons with specific conditions
let goodPersons = [];
itemList.filter(person => {
    if(person.wage > 1000) goodPersons.push(person);
})

console.log("Good Persons :", goodPersons);

// Edit persons wage - various approach // 

// Old school
for(let i=0;i<itemList.length;i++){
    itemList[i].wage += 250;
}

console.log("First update itemList : ", itemList);

// For..what ?
for(let person of itemList){
    person.wage += 250;
}
// Pouzit pri asynchronnych volaniach !!!

console.log("Second update itemList : ", itemList);

// Javascript at it's finest
itemList.forEach(person => {
    person.wage += 250;
})

console.log("Third update itemList : ", itemList);


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
    wage: 375
}

console.log("Merged Objects : ", {...object2,...object1})
