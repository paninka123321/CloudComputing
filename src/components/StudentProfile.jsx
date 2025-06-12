// This component displays the profile of a student, allowing teachers to view and edit details.
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./StudentProfile.css";
import { useNavigate } from "react-router-dom";

export default function StudentProfile() {
    const { id } = useParams(); // /students/:id
    const { user, role } = useAuth();
    const [student, setStudent] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            setLoading(true);
            try {
                const token = await user.getIdToken();
                const res = await fetch(
                    `https://psychobackend-312700987588.europe-central2.run.app/students/${id}/`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                if (!res.ok) throw new Error("Błąd pobierania danych");
                const data = await res.json();
                setStudent(data);
                setForm({
                    description: data.description || "",
                    avg_behaviour: data.avg_behaviour || "",
                    avg_marks: data.avg_marks || ""
                });
            } catch (e) {
                setStudent(null);
            } finally {
                setLoading(false);
            }
        };
        if (user) fetchStudent();
    }, [id, user]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const token = await user.getIdToken();
            const res = await fetch(
                `https://psychobackend-312700987588.europe-central2.run.app/students/${id}/`,
                {
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                }
            );
            if (!res.ok) throw new Error("Błąd zapisu");
            const data = await res.json();
            setStudent(data);
            setEditMode(false);
        } catch (e) {
            alert("Błąd zapisu");
        }
    };

    if (loading) return <div>Ładowanie...</div>;
    if (!student) return <div>Błąd ładowania danych dziecka.</div>;

    return (
    <div className="student-profile-container">
        <button
            onClick={() => navigate("/class")}
            style={{
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                color: "#33006F",
                marginBottom: "1rem"
            }}
            aria-label="Powrót do listy uczniów"
            >
            ←
            </button>
        <h2>
            {student.name} {student.surname}
        </h2>
        <p>
            <strong>Wiek:</strong> {student.age}
        </p>
        <p>
            <strong>Klasa:</strong> {student.class_name}
        </p>
        <p>
            <strong>Rodzic:</strong> {student.parent ? `${student.parent.name} ${student.parent.surname}` : "Brak"}
        </p>
        <p>
            <strong>Opis:</strong><br />
            {editMode ? (
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                />
            ) : (
                student.description || "Brak"
            )}
        </p>
        <p>
            <strong>Śr. zachowanie:</strong>{" "}
            {editMode ? (
                <input
                    type="number"
                    step="0.01"
                    name="avg_behaviour"
                    value={form.avg_behaviour}
                    onChange={handleChange}
                />
            ) : (
                student.avg_behaviour ?? "Brak"
            )}
        </p>
        <p>
            <strong>Śr. ocena:</strong>{" "}
            {editMode ? (
                <input
                    type="number"
                    step="0.01"
                    name="avg_marks"
                    value={form.avg_marks}
                    onChange={handleChange}
                />
            ) : (
                student.avg_marks ?? "Brak"
            )}
        </p>
        {role === "teacher" && (
            editMode ? (
                <div className="button-group">
                    <button onClick={handleSave}>Zapisz</button>
                    <button onClick={() => setEditMode(false)}>Anuluj</button>
                </div>
            ) : (
                <div className="button-group">
                    <button onClick={() => setEditMode(true)}>Edytuj dane</button>
                </div>
            )
        )}
    </div>
);
}