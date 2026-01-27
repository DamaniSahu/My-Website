import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const navLinkClass = ({ isActive }) => {
    console.log("isActive:", isActive);
  return isActive ? "text-red-600 font-bold" : "text-black";

  }
    

  return (
    <nav className="px-4 md:px-11 flex justify-between gap-10 fixed top-0 left-0 w-full bg-white shadow-md py-4">
      <h1>My Website.com</h1>

      <ul className="flex justify-center gap-12 items-center text-xl">

        <li>
          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={navLinkClass}
          >
            Log In
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={navLinkClass}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
