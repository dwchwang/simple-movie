import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header gap-x-5 flex items-center justify-center text-white py-10 mb-">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movie"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
