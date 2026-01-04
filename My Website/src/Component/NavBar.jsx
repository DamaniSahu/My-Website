import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between align-middle border-2 border-black">
      <h1>My Website.com</h1>

      <ul className="flex justify-evenly">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>

        <li>
          <NavLink to={"/login"}>Log In</NavLink>
        </li>

        <li>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
