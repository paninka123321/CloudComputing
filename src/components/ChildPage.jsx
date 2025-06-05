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
                    const res = await fetch("https://psychobackend-312700987588.europe-central2.run.app/students/");
                    const allStudents = await res.json();
                    const myChildren = allStudents.filter(student => student.parent_id === user.id);
                    setChildren(myChildren);
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

    if (loading) return <p>Ładowanie danych dziecka...</p>;

    return (
        <div>
            <h1>Twoje dziecko/dzieci</h1>
            {children.length === 0 ? (
                <p>Brak przypisanych dzieci.</p>
            ) : (
                <ul>
                    {children.map(child => (
                        <li key={child.student_id}>
                            <strong>{child.name}</strong> — wiek: {child.age} <br />

                            <button onClick={() => handlePredict(child.student_id)}>
                                 Wykonaj predykcję
                            </button>

                            {predictions[child.student_id] && (
                                <div style={{ marginTop: "5px" }}>
                                    <strong>Predykcja:</strong> {predictions[child.student_id].prediction} <br />
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
