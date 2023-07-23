import "./Home.scss";
import riddle from "./riddle.json";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [puzzle, setPuzzle] = useState("");
  const [puzzleAnswer, setPuzzleAnswer] = useState();
  const [puzzleExplanation, setPuzzleExplanation] = useState("");

  const [answer, setAnswer] = useState("");
  const handleSubmitData = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = () => {
    if (answer) {
      if (answer == puzzleAnswer) {
        alert("correct");
      } else {
        wrong("wrong");
      }
    } else {
      alert("give input answer");
    }
  };

  useEffect(() => {
    let randomArrayNumber = Math.floor(Math.random() * 5);

    setPuzzle(riddle[randomArrayNumber].riddle);
    setPuzzleAnswer(riddle[randomArrayNumber].answer);
    setPuzzleExplanation(riddle[randomArrayNumber].explanation);
  }, []);

  console.log(puzzleExplanation);
  console.log(puzzleAnswer);
  return (
    <div className="home-main">
      <div className="all-container">
        <h1 className="titlee-problems">Can you solve these problems?</h1>
        <div className="problemss-container">
          <div className="problemm-container">
            <h2 className="titlee-problem">Problem 1:</h2>
            <p className="textt-problem">{puzzle}</p>
          </div>
        </div>
        <div className="form">
          <input
            type="number"
            onChange={handleSubmitData}
            placeholder="Try Answering..."
          ></input>
          <button id="submit-btn" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
