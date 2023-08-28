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

// Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updatedArray[0].split("");

function insertAtBeginning1<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray1 = [1, 2, 3];

const updatedArray1 = insertAtBeginning1(demoArray1, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning1(["a", "b", "c"], "d");

// updatedArray1[0].split("");
stringArray[0].split("");
