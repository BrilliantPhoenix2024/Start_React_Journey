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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 33,
};

// person={
//     isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;
