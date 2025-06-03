// displays students list to teacher
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function StudentsList() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (!user) return;

    user.getIdToken().then((token) => {
      fetch("https://psychobackend-312700987588.europe-central2.run.app/api/my-students/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch(console.error);
    });
  }, [user]);

  if (!user) return <div>Please log in</div>;

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.surname} {student.name}
        </li>
      ))}
    </ul>
  );
}