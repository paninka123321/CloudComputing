import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // to handle navigation after signup
import "./Signup.css";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data (with role) to Firestore
      await setDoc(doc(db, "users", user.uid), {
            email,
            role,
            createdAt: serverTimestamp(),
      });
    // Przekieruj do uzupełnienia profilu
    navigate("/complete-profile");  // użyj np. react-router

    }
    catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
  <div className="signup-container">
    <div className="signup-card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Wybierz rolę</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  </div>
);
}

export default Signup;
