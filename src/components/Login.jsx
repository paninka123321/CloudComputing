import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        id="email"
        value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
        <label htmlFor="pass">Password</label>
        <input 
        type="password" 
        id="pass"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
  
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

