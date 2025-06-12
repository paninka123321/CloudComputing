import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const ChildPage = () => {
    const { user, role } = useAuth();
    const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(true);
    const [predictions, setPredictions] = useState({}); // {student_id: predictionObj}

    useEffect(() => {
        const fetchChildren = async () => {
            try {
                if (user && role === "parent") {
                    const token = await user.getIdToken();
                    const res = await fetch("https://psychobackend-312700987588.europe-central2.run.app/students/", {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
                    if (!res.ok) throw new Error("Błąd serwera");
                    const myChildren = await res.json();
                    setChildren(myChildren);
                    console.log("Dzieci z API:", myChildren);

                }
            } catch (err) {
                console.error("Błąd przy pobieraniu dzieci:", err);
            } finally {
                setLoading(false);
            }
        };


        fetchChildren();
    }, [user, role]);

    const handlePredict = async (studentId) => {
        try {
            const res = await fetch(`https://psychobackend-312700987588.europe-central2.run.app/predict_ensemble/${studentId}/`);
            const data = await res.json();
            setPredictions(prev => ({ ...prev, [studentId]: data }));
        } catch (error) {
            console.error("Błąd predykcji:", error);
            setPredictions(prev => ({ ...prev, [studentId]: { prediction: "Błąd predykcji" } }));
        }
    };

    if (loading) return <p style={{ color: "black" }}>Ładowanie danych dziecka...</p>;

    return (
        <div>
            <h1 style={{ color: "black" }}>Twoje dziecko/dzieci</h1>
            {children.length === 0 ? (
                <p style={{ color: "black" }}>Brak przypisanych dzieci.</p>
            ) : (
                <ul>
                    {children.map(child => (
                       
                        <li key={child.student_id}>
                            
                            <strong>{child.name} {child.surname}</strong> wiek: {child.age} - klasa { child.class_name}  <br />

                            <button onClick={() => handlePredict(child.student_id)}>
                                Wykonaj predykcję
                            </button>

                            {predictions[child.student_id] && (
                                <div style={{ marginTop: "5px" }}>
                                    <strong>Wskaźnik:</strong>{" "}
                                    {predictions[child.student_id].negative_ratio?.toFixed(2)} <br />
                                    <strong
                                        style={{
                                            color:
                                                predictions[child.student_id].negative_ratio > 0.5
                                                    ? "orange"
                                                    : "green",
                                        }}
                                    >
                                        {predictions[child.student_id].negative_ratio > 0.5
                                            ? "Podejrzenie neuroatypowości"
                                            : "Wszystko w porządku"}
                                    </strong>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChildPage;
