import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function StudentsList({ refresh }) {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const fetchStudents = async () => {
      setLoading(true);
      try {
        const token = await user.getIdToken();
        const response = await fetch(
          "https://psychobackend-312700987588.europe-central2.run.app/teacher/students/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Błąd pobierania uczniów:", error);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [user, refresh]);

  if (!user) return <div>Zaloguj się, aby zobaczyć uczniów</div>;
  if (loading) return <div>Ładowanie uczniów...</div>;

  return (
    <div style={{ overflowX: "auto", marginTop: "1rem" }}>
      {Array.isArray(students) && students.length === 0 ? (
        <p>Brak uczniów w tej klasie.</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={thStyle}>Imię</th>
              <th style={thStyle}>Nazwisko</th>
              <th style={thStyle}>Wiek</th>
              <th style={thStyle}>Rodzic</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.student_id || student.id}
                onClick={() =>
                  navigate(`/student/${student.student_id || student.id}`)
                }
                style={{ cursor: "pointer", backgroundColor: "#fff" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9f9f9")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
              >
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.surname}</td>
                <td style={tdStyle}>{student.age}</td>
                <td style={tdStyle}>
                  {student.parent
                    ? `${student.parent.name} ${student.parent.surname}`
                    : "Brak"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  padding: "8px",
  background: "#f0f0f0",
  border: "1px solid #ccc",
  textAlign: "left",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
};
