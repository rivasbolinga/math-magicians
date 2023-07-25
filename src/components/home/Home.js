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
  let count = 0
  const handleSubmit = () => {
    if(count < 3){
    
      if (answer) {
        count++
        console.log(count);
        if (answer == puzzleAnswer) {
          alert("correct");
        } else {
          alert("wrong");
    
        }
      } else {
        alert("give input answer");
      }
    }
   else{
    alert(puzzleExplanation)
   }
  };

  useEffect(() => {
    let randomArrayNumber = Math.floor(Math.random() * 5);

    setPuzzle(riddle[randomArrayNumber].riddle);
    setPuzzleAnswer(riddle[randomArrayNumber].answer);
    setPuzzleExplanation(riddle[randomArrayNumber].explanation);
  }, []);



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
