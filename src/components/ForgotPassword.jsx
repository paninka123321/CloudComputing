import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleReset} className="forgot-password-form">
        <h2>Reset Password</h2>
        <p>Enter your email, and we'll send you a link to reset your password.</p>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Email</button>
        {message && <p className="message">{message}</p>}
        <p><Link to="/login">Back to Login</Link></p>
      </form>
    </div>
  );
};

export default ForgotPassword;
