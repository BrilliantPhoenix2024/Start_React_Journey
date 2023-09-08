import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageOnChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const heightOnChangeHandler = (event) => {
    setHeight(event.target.value);
  };
  const superPowerOnChangeHandler = (event) => {
    setSuperPower(event.target.value);
  };

  const onClickHandler = () => {
    setDisplayCharacter(true);
  };

  return (
    <div className="App">
      <h1>Build a Simple Hero</h1>
      <div style={{ display: "grid", width: 500 , margin:'auto'}}>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={nameOnChangeHandler}
        />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={ageOnChangeHandler}
        />
        <label>Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={heightOnChangeHandler}
        />
        <label>SuperPower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={superPowerOnChangeHandler}
        />
      </div>
      <button onClick={onClickHandler}>Display Character</button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul style={{ listStyleType: "none" }}>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
