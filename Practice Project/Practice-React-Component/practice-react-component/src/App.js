import "./App.css";
import ShowUser from "./Components/ShowUser/ShowUser";

function App() {
  return (
    <div className="App">
      <ShowUser name="Atefeh" age={35} email="Salam@gmail.com" />
      <ShowUser name="Arash" age={20} email="hello@gmail.com" />
      <ShowUser name="Erfaneh" age={28} email="----" />
    </div>
  );
}

export default App;
