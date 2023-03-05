// Understanding _let_ and _const variables

/////////////////////////////
// Intro to VAR variable
// var myName = 'Atefeh';
// console.log(myName);
// myName = 'Barf';
// console.log(myName);

///////////////////////////////
// Intro to LET variable
// let myName = 'Atefeh';
// console.log(myName);
// myName = 'Barf';
// console.log(myName);

/////////////////////////////////
// Intro to CONST variable
const myName = 'Atefeh';
console.log(myName);
// myName = 'Barf';
// console.log(myName);

////////////////////////////////////
// Arrow Functions
function printMyName(name) {
  console.log(name);
}

// printMyName();
printMyName('Atefeh');

const printMyName1 = () => {
  console.log('Atefeh');
};

printMyName1();

const printMyName2 = (name1, age) => {
  console.log(name1, age);
};

printMyName1('Atefeh', 32);

// const multiply = number => {
//   return number * 2;
// };
const multiply = number => number * 2;
console.log(multiply(2));

//////////////////////////////////
// Exports & Imports (Modules)
export default person;
export const baseData = 10;
import person from './person.js';
import prs from './person.js';
import { smth } from './utility.js';
import { smth as Smth } from './utility.js';
import * as bundled from './utility.js';
