import { useState } from "react";

export default function AddStudent({ onStudentAdded, onClose }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentSurname, setParentSurname] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      surname,
      age: Number(age),
      class_name: className,
    };

    if (parentName && parentSurname) {
      studentData.parent = {
        name: parentName,
        surname: parentSurname,
        email: parentEmail,
        phone: parentPhone,
      };
    }

    try {
      const res = await fetch("https://psychobackend-312700987588.europe-central2.run.app/api/students/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!res.ok) throw new Error("Błąd przy dodawaniu ucznia");

      onStudentAdded(); // wywołuje callback do odświeżenia listy
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
        <input placeholder="Klasa (np. 2A)" value={className} onChange={(e) => setClassName(e.target.value)} required />

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
