import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://spaceflightnewsapi.net/api/v2/articles").then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer"></div>
    </div>
  );
}

export default App;
