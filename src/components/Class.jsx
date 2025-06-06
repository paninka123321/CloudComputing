import { useEffect, useState } from "react";
import StudentsList from "./StudentsList";
import AddStudent from "./AddStudent";
import { useAuth } from "../context/AuthContext";

export default function Class() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [teacherId, setTeacherId] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function fetchTeacherId() {
      const token = await user.getIdToken();
      try {
        const res = await fetch("https://psychobackend-312700987588.europe-central2.run.app/api/teacher-id/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Błąd pobierania teacher_id");
        const data = await res.json();
        setTeacherId(data.teacher_id);
      } catch (e) {
        console.error(e);
      }
    }
    fetchTeacherId();
  }, [user]);

  const handleStudentAdded = () => {
    setShowModal(false);
    setRefresh(!refresh);
  };

  if (!user) return <div>Zaloguj się, aby zobaczyć klasę</div>;
  if (!teacherId) return <div>Ładowanie danych nauczyciela...</div>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Twoja klasa:</h1>
        <button onClick={() => setShowModal(true)}>➕ Dodaj ucznia</button>
      </div>
      <StudentsList refresh={refresh} teacherId={teacherId} />
      {showModal && <AddStudent onStudentAdded={handleStudentAdded} onClose={() => setShowModal(false)} teacherId={teacherId} />}
    </div>
  );
}
