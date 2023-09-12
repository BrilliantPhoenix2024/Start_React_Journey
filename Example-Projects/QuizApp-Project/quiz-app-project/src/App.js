import React, { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

// All the posible Satges in this App = ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <Menu />}
    </div>
  );
}

export default App;
