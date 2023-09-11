import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://spaceflightnewsapi.net/api/v2/articles").then((response) =>
      response.json().then((data) => {
        setNewsList(data);
      })
    );
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return <div key={key}>{val.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
