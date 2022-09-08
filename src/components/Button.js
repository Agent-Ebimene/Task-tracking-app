import React from "react";

const Button = ({ color, showForm }) => {
  return (
    <div>
      <button className="btn" style={{ background: color }} onClick={showForm}>
        Add Task
      </button>
    </div>
  );
};

export default Button;
