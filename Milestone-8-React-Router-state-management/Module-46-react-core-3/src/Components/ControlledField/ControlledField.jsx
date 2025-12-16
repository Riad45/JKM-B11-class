import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const passValue = e.target.value;
    setPassword(passValue);
    console.log("length:",passValue.length);

    if (passValue.length <= 5) {
      setError("Password must be 6 digit or longer");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"  placeholder="email" required />
        <br />
        <input
          type="password"
          onChange={handleOnChange}
          value={password}
          name="password"
          
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    
    </div>
  );
};

export default ControlledField;
