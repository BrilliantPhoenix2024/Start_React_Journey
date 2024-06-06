import React, { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried?: boolean;
  courses: string[];
  country: Country;
}

export enum Country {
  Iran = "Iran",
  Germany = "Germany",
  Italy = "Italy",
}

const Person = (props: Props) => {
  const [name, setName] = useState<string>("Atefeh");

  return (
    <div>
      <h1>Name : {props.name ? name : name}</h1>
      <h2>Email : {props.email}</h2>
      <h3>Age : {props.age}</h3>
      <h4>Married : {props.isMarried ? "yes" : "no"}</h4>
      {props.courses.map((course: string) => (
        <h5 key={course}>{course}</h5>
      ))}
      <h5>{props.country}</h5>
      <button onClick={() => setName("Mitra")}>Change Name</button>
    </div>
  );
};

export default Person;
