import React, { useState } from "react";
import "./App.css";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data);
      });
  };

  return (
    <div className="App">
      <section className="search-section">
        <h1>Search for a Game</h1>
        <input
          type="text"
          placeholder="Minecraft..."
          onChange={(event) => {
            setGameTitle(event.target.value);
          }}
        />
        <button onClick={searchGame}>Search Game Title</button>

        <di className="games">
          {searchedGames.map((game, key) => {
            return (
              <div className="game" key={key}>
                {game.external}
              </div>
            );
          })}
        </di>
      </section>
      <section className="deals-section">
        <h1>Latest Deals</h1>
      </section>
    </div>
  );
}

export default App;
