import { useState } from "react";

export default function Counter() {
  const countStyle = {
    padding: "10px",
    border: "2px solid yellow",
    margin: " 10px",
  };

  const [count, setCount] = useState(0);

  const handleLike = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleunlike = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={countStyle}>
      <h3>exploring const useState</h3>

      <p> Total Like : {count} </p>

      <button onClick={handleLike}>Like</button>
      <button onClick={handleunlike}>Unlike</button>
    </div>
  );
}
