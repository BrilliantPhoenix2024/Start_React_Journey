import { Questions } from "../helpers/Questions";
import "../App.css";

function Quiz() {
  return <div className="Quiz">{Questions[0].prompt}</div>;
}

export default Quiz;
