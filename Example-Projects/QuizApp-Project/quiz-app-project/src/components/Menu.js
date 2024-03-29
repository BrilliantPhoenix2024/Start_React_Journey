import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "../App.css";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <div className="Menu">
      <h1>Enter Your Name: </h1>
      <input
        type="text"
        placeholder="e.g. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
