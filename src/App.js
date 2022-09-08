import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);
  //Delete a Task
  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };
  // Add a the reminder class
  const handleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };
  //function to show form
  const handleDisplayform = () => {
    setDisplayForm(!displayForm);
  };
  // Add a task from the form
  const handleAddTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header showForm={handleDisplayform} />
      {displayForm && <Form addTask={handleAddTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} addReminder={handleReminder} />
    </div>
  );
}

export default App;
