import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the custom hook
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
console.log("Navbar is rendering...");
const { user, role } = useAuth();
console.log("User:", user);
console.log("Role:", role);
  return (
      <nav className="navbar">
          <div className="logo">Neurodetective</div>

          <div className="nav-sections">
              <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/psychosphere">PsychoSphere</Link></li>

                  {role === "student" && (
                      <>
                          <li><Link to="/my-humor">My Humor</Link></li>
                          <li><Link to="/games">Games</Link></li>
                      </>
                  )}
                  {role === "parent" && (
                      <li><Link to="/child">Child</Link></li>
                  )}
                  {role === "teacher" && (
                      <>
                          <li><Link to="/class">Class</Link></li>
                          <li><Link to="/chat">Chat</Link></li>
                      </>
                  )}
              </ul>

              <div className="logout-section">
                  {user ? (
                      <Link to="/logout" className="logout-button">Logout</Link>
                  ) : (
                      <Link to="/login">Login/Register</Link>
                  )}
              </div>
          </div>
      </nav>
  );
};

export default Navbar;
