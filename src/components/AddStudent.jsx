import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // <--- dodaj to!

export default function AddStudent({ onStudentAdded, onClose }) {
  const { user } = useAuth(); // <--- dodaj to!
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentSurname, setParentSurname] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Musisz być zalogowany.");
      return;
    }

    const token = await user.getIdToken();


    let parentId = null;

if (parentName && parentSurname) {
  const parentRes = await fetch("https://psychobackend-312700987588.europe-central2.run.app/api/parents/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: parentName,
      surname: parentSurname,
      email: parentEmail,
      phone: parentPhone,
    }),
  });

  if (!parentRes.ok) {
    throw new Error("Błąd przy dodawaniu rodzica");
  }

  const parentData = await parentRes.json();
  parentId = parentData.parent_id;
};

const studentData = {
  name,
  surname,
  age: Number(age),
  parent_id: parentId,
};

console.log("Wysyłam dane ucznia:", studentData);

    
    try { 
        console.log("Wysyłam dane ucznia:", studentData);

      const res = await fetch("https://psychobackend-312700987588.europe-central2.run.app/api/students/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <--- dodaj to!
        },
        body: JSON.stringify(studentData),
      });

      if (!res.ok) throw new Error("Błąd przy dodawaniu ucznia");

      onStudentAdded(); // Odśwież listę i zamknij modal
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: "#eee", padding: "1rem", marginTop: "1rem" }}>
      <h2>Dodaj ucznia</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Imię ucznia" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Nazwisko ucznia" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        <input placeholder="Wiek" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

        <p><strong>Dane rodzica (opcjonalnie):</strong></p>
        <input placeholder="Imię rodzica" value={parentName} onChange={(e) => setParentName(e.target.value)} />
        <input placeholder="Nazwisko rodzica" value={parentSurname} onChange={(e) => setParentSurname(e.target.value)} />
        <input placeholder="Email rodzica" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} />
        <input placeholder="Telefon rodzica" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} />

        <br />
        <button type="submit">Zapisz ucznia</button>
        <button type="button" onClick={onClose}>Anuluj</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
