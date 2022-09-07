import React from 'react'

import Task from "./Task";
const Tasks = ({tasks,onDelete}) => {
  return (
    <div>
    {tasks.map((task)=>{
        return(
            <Task task={task} key={task.id} onDelete={onDelete}/>
        )
    })}
    </div>
  )
}

export default Tasks