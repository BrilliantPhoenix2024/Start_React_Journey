import React from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import { Country } from "./Components/Person/Person";

function App() {
  const getAge = (name: string): number => {
    return 25;
  };

  const age: number = getAge("Atefeh");
  console.log(age);

  return (
    <div className="App">
      <Person
        name={"Atefeh"}
        email={"hello@hello.com"}
        age={35}
        isMarried={true}
        courses={["Python", "React", "Django"]}
        country={Country.Italy}
      />
    </div>
  );
}

export default App;
