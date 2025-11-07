import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavRoute = ({ route }) => {
  return (
    <ul>
      <li className="px-6 py-1 hover:bg-amber-500">
        <button>
          <NavLink
            className={({ isActive }) => 
              isActive 
                ? "text-amber-500 hover:text-white" 
                : "" 
            }
            to={route.url}
          >
            {route.title}
          </NavLink>
        </button>
      </li>
    </ul>
  );
};

export default NavRoute;
