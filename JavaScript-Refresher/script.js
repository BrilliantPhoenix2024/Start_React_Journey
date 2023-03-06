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
// export default person;
// export const baseData = 10;
// import person from './person.js';
// import prs from './person.js';
// import { smth } from './utility.js';
// import { smth as Smth } from './utility.js';
// import * as bundled from './utility.js';

/////////////////////////////
// Understanding Classes (ES6)
// class Person {
//   constructor() {
//     this.name = 'Atefeh';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();

class Human {
  constructor() {
    this.gender = 'female';
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person2 extends Human {
  constructor() {
    super();
    this.name = 'Barf';
    this.gender = 'male';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person2 = new Person2();
person2.printMyName();
person2.printGender();

///////////////////////////////////
// Classes, Properties and Methods (ES7)
class Human1 {
  gender = 'female';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person3 extends Human1 {
  name = 'Barf';
  gender = 'male';

  printMyName = () => {
    console.log(this.name);
  };
}

//////////////////////////////////
// The Spread and Rest Operators
// Spread Arrays
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// const newNumbers = [numbers, 4];
// console.log(newNumbers);

// const person = {
//   name: 'Atefeh',
// };
// Spread Objects
// const newPerson = {
//   ...person,
//   age: 32,
// };
// console.log(newPerson);
// // The Rest Operators
// const filter = (...args) => {
//   return args.filter(el => el === 1);
// };
// console.log(filter(1, 2, 3));

///////////////////////////////
// Destructuring
// Array Destructuring
const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1, num2);
[num1, , num3] = numbers;
console.log(num3);
console.log(num1, num3);
// Object Destructuring
const { userName } = { userName: 'Atefeh', age: 32 };
console.log(userName);
// console.log(age);

//////////////////////////////
// Reference and Primitive Types
// Numbers , Strings, Booleans
const number = 1;
const num2 = number;
console.log(num2); // Real copy
// Objects, Arrays
const person = {
  name: 'Atefeh',
};
const secondPerson = person;
person.name = 'Barf';
console.log(secondPerson); // NOT Real Copy, is a Pointer to a place of memory Also for Arrays too.
const person1 = {
  name: 'Atefeh',
};
const secondPerson1 = { ...person1 }; // Real Copy
person1.name = 'Barf';
console.log(secondPerson1);
console.log(person1);
