import "./App.css";
import Person from "./Components/Person/Person";

function App() {
  return (
    <div className="App">
      <Person
        name={"Atefeh"}
        email={"hello@hello.com"}
        age={35}
        isMarried={true}
        courses={[`"Python", "React", "Django"`]}
      />
    </div>
  );
}

export default App;
