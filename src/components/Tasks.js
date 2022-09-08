import React from "react";

import Task from "./Task";
const Tasks = ({ tasks, onDelete, addReminder }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            onDelete={onDelete}
            addReminder={addReminder}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
