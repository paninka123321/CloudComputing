import { useState } from "react";
import StudentsList from "./StudentsList";
import AddStudent from "./AddStudent";

export default function Class() {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false); // trigger odświeżenia listy

  const handleStudentAdded = () => {
    setShowModal(false);
    setRefresh(!refresh); // przełączenie wartości odświeża listę
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Twoja klasa:</h1>
        <button onClick={() => setShowModal(true)}>➕ Dodaj ucznia</button>
      </div>
      <StudentsList 
    refresh={refresh} />
      {showModal && <AddStudent onStudentAdded={handleStudentAdded} onClose={() => setShowModal(false)} />}
    </div>
  );
}
