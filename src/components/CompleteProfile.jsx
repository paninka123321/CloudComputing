// data completion form
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const CompleteProfile = () => {
  const { user, role } = useAuth();
  
  // Ensure user and role are available
  console.log("user:", user);
  console.log("role:", role);

  // Common fields for both roles
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  // Teacher specific fields
  const [education, setEducation] = useState("");
  const [subject, setSubject] = useState("");
  const [sex, setSex] = useState("");
  const [className, setClassName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  // Parent specific fields
  const [work, setWork] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "";
    let data = {};

    if (role === "teacher") {
      url = "/api/teachers/"; // Endpoint for teachers
    // Prepare data for teacher
      data = {
        name,
        surname,
        age: Number(age),
        education,
        subject,
        sex,
        class_name: className,
        school_name: schoolName,
        email: user.email, // email from auth context (firebase auth)
      };
    } else if (role === "parent") {
      url = "/api/parents/"; // Endpoint for parents
    // Prepare data for parent
      data = {
        name,
        surname,
        age: Number(age),
        work,
        phone,
        email: user.email, // email from auth context (firebadse auth)
      };
    } else {
      setError("Nieznana rola.");
      return;
    }
    
    // Log data and URL for debugging
    console.log("Wysyłam dane do backendu:", data);
    console.log("Na endpoint:", url);
    try {
    if (url) {
      const response = await fetch(`https://psychobackend-312700987588.europe-central2.run.app${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // jeśli autoryzacja, to tu token itp.
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Błąd zapisu danych w backendzie");
    }
      // Alert or redirect after successful signup
      console.log("User created successfully:", user);
      alert("User created successfully!");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uzupełnij swój profil uzytkownika({role})</h2>
      <input placeholder="Imię" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Nazwisko" value={surname} onChange={e => setSurname(e.target.value)} required />
      <input placeholder="Wiek" type="number" value={age} onChange={e => setAge(e.target.value)} required />

      {role === "teacher" && (
        <>
          <input placeholder="Wykształcenie" value={education} onChange={e => setEducation(e.target.value)} required />
          <input placeholder="Przedmiot" value={subject} onChange={e => setSubject(e.target.value)} required />
          <input placeholder="Płeć" value={sex} onChange={e => setSex(e.target.value)} required />
          <input placeholder="Nazwa klasy" value={className} onChange={e => setClassName(e.target.value)} required />
          <input placeholder="Szkoła" value={schoolName} onChange={e => setSchoolName(e.target.value)} required />
          <input placeholder="Email" value={user.email} disabled />
        </>
      )}

      {role === "parent" && (
        <>
          <input placeholder="Zawód" value={work} onChange={e => setWork(e.target.value)} required />
          <input placeholder="Telefon" value={phone} onChange={e => setPhone(e.target.value)} required />
          <input placeholder="Email" value={user.email} disabled />
        </>
      )}

      <button type="submit">Zapisz dane</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CompleteProfile;
