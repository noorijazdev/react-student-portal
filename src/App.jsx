import React, { useState } from "react";
import "./App.css";

export default function App() {
  const allowedNames = ["noor", "salma", "ayesha", "laila", "fahad", "omer"];
  const correctId = "12345";

  const [page, setPage] = useState("login");
  const [loginData, setLoginData] = useState({ name: "", id: "", gender: "" });

  const [students, setStudents] = useState([
    { name: "noor", id: "12345", gender: "Female" },
    { name: "salma", id: "12345", gender: "Female" },
    { name: "ayesha", id: "12345", gender: "Female" },
    { name: "laila", id: "12345", gender: "Female" },
    { name: "fahad", id: "12345", gender: "Male" },
    { name: "omer", id: "12345", gender: "Male" },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    id: "",
    gender: "",
  });

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      allowedNames.includes(loginData.name.toLowerCase()) &&
      loginData.id === correctId
    ) {
      setPage("desktop");
    } else {
      alert("Invalid credentials!");
    }
  };

  // Handle Add Student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.id && newStudent.gender) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", id: "", gender: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="app">
      {page === "login" ? (
        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Name"
              value={loginData.name}
              onChange={(e) =>
                setLoginData({ ...loginData, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Enter ID"
              value={loginData.id}
              onChange={(e) =>
                setLoginData({ ...loginData, id: e.target.value })
              }
              required
            />
            <select
              value={loginData.gender}
              onChange={(e) =>
                setLoginData({ ...loginData, gender: e.target.value })
              }
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="desktop">
          <h1>Todos</h1>

          <form onSubmit={handleAddStudent} className="add-form">
            <input
              type="text"
              placeholder="Enter Name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Enter ID"
              value={newStudent.id}
              onChange={(e) =>
                setNewStudent({ ...newStudent, id: e.target.value })
              }
            />
            <select
              value={newStudent.gender}
              onChange={(e) =>
                setNewStudent({ ...newStudent, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button type="submit">Add Student</button>
          </form>

          <ul className="student-list">
            {students.map((s, index) => (
              <li key={index}>
                {s.name} - {s.id} - {s.gender}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
