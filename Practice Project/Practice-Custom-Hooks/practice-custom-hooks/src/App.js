import "./App.css";
import { useToggle } from "./Customs/useToggle/useToggle";

function App() {
  const { state: isVisible, toggle } = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>This is my hidden text</h1>}
    </div>
  );
}

export default App;
