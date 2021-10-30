import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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
      reminder: false,
    },
  ]);

  // deleteTask
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
