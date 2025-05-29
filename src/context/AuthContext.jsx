// przechowuje użytkownika,
// przechowuje jego rolę,
// obsługuje logout.

import { createContext, useContext, useEffect, useId, useState } from "react";
import { auth, getUserRole, db} from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // NEW: role state
  const [loading, setLoading] = useState(true); // helps avoid flicker

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // setting role of the user (fetch it from database)
      if (currentUser) {
        const role = await getUserRole(currentUser.uid);
        setRole(role);
      } else {
        console.warn("No role found for user.");
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return ( <AuthContext.Provider value={{ user, role, logout, loading }}>
    {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
