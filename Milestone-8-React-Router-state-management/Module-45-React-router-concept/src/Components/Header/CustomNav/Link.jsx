import React from "react";

const Link = ({ route }) => {
  return (


    <li className="px-6 py-1 hover:bg-amber-500">
      <a href={route.url}>{route.title}</a>
    </li>
  );
};

export default Link;
