import React from 'react';
import { Link } from 'react-router';

const CustomNavLink = ({route}) => {

    console.log();
    return (

        <ul>
             <li className="px-6 py-1 hover:bg-amber-500">
      <button><Link to={route.url}>{route.title}</Link></button>
    </li>
       </ul>
  
    );
};

export default CustomNavLink;