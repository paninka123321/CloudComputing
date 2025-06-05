// This component displays the profile of a student, allowing teachers to view and edit details.
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function StudentProfile() {
  const { id } = useParams(); // student_id
  const { user } = useAuth();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    if (!user) return;

    user.getIdToken().then((token) => {
      fetch(`https://psychobackend-312700987588.europe-central2.run.app/api/students/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setStudent(data);
          setEditedData(data);
          setLoading(false);
        })
        .catch(console.error);
    });
  }, [user, id]);

  const handleSave = async () => {
    const token = await user.getIdToken();
    fetch(`https://psychobackend-312700987588.europe-central2.run.app/api/students/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editedData),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        alert("Zapisano zmiany");
      })
      .catch(console.error);
  };

  if (loading) return <div>Ładowanie...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Szczegóły ucznia: {student.name} {student.surname}
      </h1>

      <div className="mb-4">
        <label className="block">Opis:</label>
        <textarea
          className="border p-2 w-full"
          value={editedData.description || ""}
          onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label>Średnia ocen:</label>
        <input
          type="number"
          value={editedData.avg_marks || ""}
          onChange={(e) => setEditedData({ ...editedData, avg_marks: parseFloat(e.target.value) })}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Średnie zachowanie:</label>
        <input
          type="number"
          value={editedData.avg_behaviour || ""}
          onChange={(e) => setEditedData({ ...editedData, avg_behaviour: parseFloat(e.target.value) })}
          className="border p-2 w-full"
        />
      </div>

      {editedData.parent && (
        <div className="border-t pt-4 mt-4">
          <h2 className="text-lg font-semibold">Rodzic:</h2>
          <p>
            {editedData.parent.name} {editedData.parent.surname}, {editedData.parent.age} lat
          </p>
          <p>Email: {editedData.parent.email}</p>
          <p>Telefon: {editedData.parent.phone}</p>
          <p>Zawód: {editedData.parent.work}</p>
        </div>
      )}

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Zapisz zmiany
      </button>
    </div>
  );
}
