import "./App.css";
import { useCounter } from "./Customs/useCounter/useCounter";

function App() {
  const { count, increase, decrease, reset } = useCounter();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
