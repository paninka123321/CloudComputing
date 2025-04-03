import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
console.log("Navbar is rendering...");
  return (
    <nav className="navbar">
      <div className="logo">Neurodetective</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/psychosfera">PsychoSfera</Link></li>
        <li><Link to="/login">Login/Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
