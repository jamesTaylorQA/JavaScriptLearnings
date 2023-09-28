/*
let country = "South African";
let continent = "Africa";
let population = 56000000;

console.log(country);
console.log(continent);
console.log(population);
*/

// BMI = mass / heights ** 2 = mass / (height * height)

// const massMark = 78;
// const heightMark = 1.69; 
// const massJohn = 92;
// const heightJohn = 1.95; 

const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76; 

const markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);