import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docs Apt",
      day: "Feb 5th 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th 12:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "PT Session",
      day: "Feb 6th 6:45pm",
      reminder: false
    }
  ]);

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
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}
