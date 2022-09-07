import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form"

function App() {
  const [tasks,setTasks]=useState([
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
  ])
  const deleteTask=(id)=>{
    setTasks(()=>{
      tasks.filter((task)=>{
return task.id !==id;
      })
    })
  }
  return (
    <div className="container">
     <Header/>
       <Tasks tasks={tasks} onDelete={deleteTask}/>
       <Form/>
    </div>
  );
}

export default App;
