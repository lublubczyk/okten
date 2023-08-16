const greeting = "Hello";
const firstPartWebAddress = "owu";
const secondPartWebAddress = "com";
const thirdPartWebAddress = "ua";

console.log(
  `${greeting} ${firstPartWebAddress}.${secondPartWebAddress}.${thirdPartWebAddress}`
);

const number1 = 1;
console.log(number1);
const number2 = 10;
console.log(number2);
const number3 = number1 - Math.pow(number2, 3);
console.log(number3);
const number4 = Math.pow(number2, 2) + number2 * 2 + number1 * 3;
console.log(number4);
const number5 = +Math.PI.toFixed(2);
console.log(number5);
const number6 = 2.7;
console.log(number6);
const number7 = 16;
console.log(number7);
const boolTrue = true;
console.log(boolTrue);
const boolFalse = !boolTrue;
console.log(boolFalse);

const firstName = "Любомир";
const middleName = "Любчинський";
const lastName = "Михайлович";
const person = middleName + " " + firstName + " " + lastName;
console.log(greeting + " I am " + person);

let a = 100;
let b = "100";
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

const clientName = prompt("Введіть своє Імя");
const clientSurname = prompt("Ведіть своє По-Батькові");
const age = prompt(`${clientName} ${clientSurname} скільки вам років`);
console.log(`${greeting} ${firstName} ${lastName} you have ${age}`);
