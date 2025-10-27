import React, { useState } from 'react';
import NavRoute from './NavRoute';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const navData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Nav = () => {
 const [open, setOpen] = useState(false);
  const links = navData.map((route) => (
    <NavRoute route={route} key={route.id}></NavRoute>
  ));

  return (
    <nav className="flex justify-between p-6 ">

      <ul className={ ` md:hidden absolute bg-amber-100 text-black 
        ${open? 'top-20 left-10': 'top-20 -left-70'}  duration-1000 `}>{links}</ul>

      <div className="flex justify-center items-center gap-5 ">
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <MdCancel size={35} /> : <GiHamburgerMenu size={35} />}
        </button>
        <h3>My Nav</h3>
      </div>

      <ul className="md:flex hidden gap-40 ">{links}</ul>

      <button className="btn btn-outline">Sign In</button>
    </nav>
  );
};

export default Nav;