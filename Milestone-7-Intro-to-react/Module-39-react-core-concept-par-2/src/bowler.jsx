import { useState } from "react"

export default function Bowler(){

      const countStyle = {
    padding: "10px",
    border: "2px solid yellow",
    margin: " 10px",
  };



    const [ball, setBall] = useState(6);
    const [comment, setComment] = useState("");
    const [wideCount , setWideCount] = useState(0);

    const handleBall=()=>{

        const newBall = ball-1;

        setBall(newBall)

        setComment("good ball...");


    }

    const handleWideball = ()=>{
        const totalWide = wideCount +1;
        setWideCount(totalWide);
        setComment("oh no .. you are giving wide...");
    }


    return(
        <div style={countStyle}>
            <h1>Ball remaining : {ball}</h1>
            <small>total wide : {wideCount}</small> <br /> <br />
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleWideball}>Wide Ball</button>
            <h3>Comment: {comment} </h3>
        </div>
    )
}