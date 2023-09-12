import React, { useState } from "react";
import Menu from "./components/Menu";
import { GameStateContext } from "./helpers/Contexts";
import "./App.css";

// All the posible Satges in this App = ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menu />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
