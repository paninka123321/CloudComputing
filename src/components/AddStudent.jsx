import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AddStudent({ onStudentAdded, onClose }) {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("Musisz być zalogowany.");
      return;
    }

    try {
      const token = await user.getIdToken();

      const studentData = {
        name,
        surname,
        age: age ? Number(age) : null,
      };

      const res = await fetch(
        "https://psychobackend-312700987588.europe-central2.run.app/students/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(studentData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Błąd przy dodawaniu ucznia");
      }

      onStudentAdded();
      setName("");
      setSurname("");
      setAge("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: "grey", padding: "1rem", marginTop: "1rem" }}>
      <h2>Dodaj ucznia</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Imię ucznia"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Nazwisko ucznia"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          placeholder="Wiek"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <button type="submit">Zapisz ucznia</button>
        <button type="button" onClick={onClose}>
          Anuluj
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
