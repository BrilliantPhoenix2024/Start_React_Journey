import "./App.css";
import User from "./Components/User/User";

function App() {
  const users = [
    { name: "ali", age: 20 },
    { name: "atefeh", age: 35 },
    { name: "nazanin", age: 25 },
    { name: "mohammad", age: 35 },
  ];
  return (
    <div className="App">
      {users.map((user, index)=>{
        return <User key={index} name={user.name} age={user.age} />;
      })}
     
    </div>
  );
}

export default App;
