import { useState } from "react";

export default function Bowler() {
  const countStyle = {
    padding: "10px",
    border: "2px solid yellow",
    margin: " 10px",
  };

  const [ball, setBall] = useState(6);
  const [comment, setComment] = useState("");
  const [wideCount, setWideCount] = useState(0);
  const [NoBallCount, setNoBallCount] = useState(0);
  const [runs, setRuns] = useState(0);

  const handleValidBall = () => {
    const newValidBall = ball - 1;

    setBall(newValidBall);

    setComment("good ball...");

    const runsArray = [runs+1,runs+2, runs+4,runs+0,runs+6];

    const totalRuns = runsArray[Math.floor(Math.random()* runsArray.length)];

        {
      if(totalRuns === runs+4){
        setComment(".........FOUR............!!")
      }
    }
        {
      if(totalRuns === runs+6){
        setComment("...........SIX............!!")
      }
    }

    setRuns(totalRuns);


  };

  const handleWideball = () => {
    const totalWide = wideCount + 1;
    setWideCount(totalWide);

    const totalRuns = runs+1;
    setRuns(totalRuns);
    setComment("..........WIDE........");
  };
  const handleNoball = () => {
    const totalNoBall = NoBallCount + 1;
    setNoBallCount(totalNoBall);
    const totalRuns = runs+1;
    setRuns(totalRuns);
    setComment("................ NO ball.........");
  };

  const handleBall = () => {
    const ballArray = [handleValidBall, handleWideball, handleNoball];

    const randomball = ballArray[Math.floor(Math.random() * ballArray.length)];




        {
      if (ball === 0) {
        return setBall(0), setComment("your over is finished");
      }
    }

   randomball();
  };

  return (
    <div style={countStyle}>
      <h2>Ball remaining : {ball}</h2>
      <h1>Total Runs you gave: {runs} </h1>
      <small>total wide : {wideCount}</small> <br /> <br />
      <small>total NoBall : {NoBallCount}</small> <br /> <br />
      <button onClick={handleBall}>Ball</button>
      {/* <button onClick={handleWideball}>Wide Ball</button> */}
      <h3>Comment: {comment} </h3>
    </div>
  );
}
