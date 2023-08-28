// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.1;

let username: string | string[];

username = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex type

let hobbies: string[];

hobbies = ["Sport", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 33,
};

// person={
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;

// Function & types

function add(a: number, b: number): number {
  return a + b;
}

function output(value: any) {
  console.log(value);
}
