import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Task = ({task,onDelete}) => {
  return (
    <div className="task" onClick={(e)=>{
        onDelete(e.target.id);
    }
    }>
    <h3>{task.text} <FaTimes style={{"color":"red"}}/></h3>
    <p>{task.date}</p>
    </div>
  )
}

export default Task