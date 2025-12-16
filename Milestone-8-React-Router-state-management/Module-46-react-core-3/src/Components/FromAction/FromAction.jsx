import React from "react";

const FromAction = () => {
  const handleFromAction = (formData) => {
    console.log(formData.get("email"));
    console.log("submitted");
  };
  return (
    <div>
      <form action={handleFromAction}>
        <input type="email" name="email" id="" placeholder="email" required />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FromAction;
