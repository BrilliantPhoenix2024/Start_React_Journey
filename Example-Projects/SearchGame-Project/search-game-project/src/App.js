import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [gameDeals, setGameDeals] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data);
      });
  };

  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSise=3`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchedGames(data);
        console.log(data);
      });
  }, []);

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

        <div className="games">
          {searchedGames.map((game, key) => {
            return (
              <div className="game" key={key}>
                {game.external}
                <img src={game.thumb} />
                {game.cheapest}
              </div>
            );
          })}
        </div>
      </section>
      <section className="deals-section">
        <h1>Latest Deals</h1>
        <div className="games">
          {gameDeals.map((game, key) => {
            return (
              <div className="game" key={key} id="deals">
                <h3> {game.title}</h3>
                <p>Normal Price: {game.normalPrice}</p>
                <p>Deal Price: {game.salePrice}</p>
                <h3>You Save {game.savings.substr(0, 2)}%</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
