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
                        <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfQPTijbJQb-Ub7jHNwXllJeNit5hWAWKV3l419yirSqU7lNw/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ankieta ADHD
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe_l78ywiA2-ZGNTUjMQSabHaReDtoxR8QZ2FPSvLIsx1FTEg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ankieta Autyzmu
                        </a>
                        </li>
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
