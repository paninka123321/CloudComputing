import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function StudentsList({ refresh }) {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [predictions, setPredictions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const fetchStudents = async () => {
      setLoading(true);
      try {
        const token = await user.getIdToken();
        const response = await fetch(
          `https://psychobackend-312700987588.europe-central2.run.app/students/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 403) {
          throw new Error("Brak dostępu do tych danych.");
        }
        if (response.status === 401) {
          throw new Error("Musisz być zalogowany.");
        }
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
    const handlePredict = async (studentId) => {
        try {
            const res = await fetch(
                `https://psychobackend-312700987588.europe-central2.run.app/predict_ensemble/${studentId}/`
            );
            const data = await res.json();
            setPredictions((prev) => ({ ...prev, [studentId]: data }));
        } catch (error) {
            console.error("Błąd predykcji:", error);
            setPredictions((prev) => ({
                ...prev,
                [studentId]: { prediction: "Błąd predykcji" },
            }));
        }
    };
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
              <th style={thStyle}>Id</th>
              <th style={thStyle}>Imię</th>
              <th style={thStyle}>Nazwisko</th>
              <th style={thStyle}>Wiek</th>
              <th style={thStyle}>Rodzic</th> 
            </tr>
          </thead>
          <tbody>
                          {students.map((student) => (
                              <React.Fragment key={student.student_id || student.id}>
                                  <tr
                                      onClick={() =>
                                          navigate(`/students/${student.student_id || student.id}`)
                                      }
                                      style={{ cursor: "pointer", backgroundColor: "#fff" }}
                                      onMouseOver={(e) =>
                                          (e.currentTarget.style.backgroundColor = "#f9f9f9")
                                      }
                                      onMouseOut={(e) =>
                                          (e.currentTarget.style.backgroundColor = "#fff")
                                      }
                                  >
                                      <td style={tdStyle}>{student.student_id}</td>
                                      <td style={tdStyle}>{student.name}</td>
                                      <td style={tdStyle}>{student.surname}</td>
                                      <td style={tdStyle}>{student.age}</td>
                                      <td style={tdStyle}>
                                          {student.parent
                                              ? `${student.parent.name} ${student.parent.surname}`
                                              : "Brak"}
                                      </td>
                                      <td style={tdStyle}>
                                          <button onClick={(e) => {
                                              e.stopPropagation(); // zapobiega nawigacji przy kliknięciu przycisku
                                              handlePredict(student.student_id);
                                          }}>
                                              Wykonaj predykcję
                                          </button>
                                      </td>
                                  </tr>

                                  {predictions[student.student_id] && (
                                      <tr>
                                          <td colSpan="6" style={{ ...tdStyle, backgroundColor: "#f5f5f5" }}>
                                              <strong>Wskaźnik:</strong>{" "}
                                              {predictions[student.student_id].negative_ratio?.toFixed(2)} <br />
                                              <strong
                                                  style={{
                                                      color:
                                                          predictions[student.student_id].negative_ratio > 0.5
                                                              ? "orange"
                                                              : "green",
                                                  }}
                                              >
                                                  {predictions[student.student_id].negative_ratio > 0.5
                                                      ? "Podejrzenie neuroatypowości"
                                                      : "Wszystko w porządku"}
                                              </strong>
                                          </td>
                                      </tr>
                                  )}
                              </React.Fragment>
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
