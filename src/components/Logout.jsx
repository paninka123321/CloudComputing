// Logout.jsx
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logOutUser = async () => {
            try {
                await signOut(auth);
                alert("Zosta�e� wylogowany!");
                navigate("/Home");
            } catch (error) {
                console.error("B��d podczas wylogowania:", error);
            }
        };

        logOutUser();
    }, [navigate]);

    return <p>Wylogowywanie...</p>;
};

export default Logout;
