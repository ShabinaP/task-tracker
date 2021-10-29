import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist Appointment",
      day: "Nov 22nd at 4:00PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Renew passport",
      day: "Nov 7th at 12:00PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Fix NASA project",
      day: "Nov 3rd at 1:00PM",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
