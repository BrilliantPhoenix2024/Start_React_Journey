import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="search-section">
        <h1>Search for a Game</h1>
        <input type="text" placeholder="Minecraft..." />
        <button>Search Game Title</button>
      </section>
      <section className="deals-section">
        <h1>Latest Deals</h1>
      </section>
    </div>
  );
}

export default App;
