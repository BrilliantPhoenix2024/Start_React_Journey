import React from "react";
import propTypes from "prop-types";

const Person = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h3>Age : {props.age}</h3>
      <h4>Married : {props.isMarried ? "yes" : "no"}</h4>
      <h5>{props.courses}</h5>
    </div>
  );
};

export default Person;

Person.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  age: propTypes.number,
  isMarried: propTypes.bool,
  courses: propTypes.arrayOf(propTypes.string),
};
