import React from "react";
import { Link } from "react-router-dom";
import { LuSoup } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <LuSoup />
      <Link to={"/"}>  Luscious</Link>
    </nav>
  );
};

export default Navbar;