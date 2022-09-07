import React from 'react'

const Form= () => {
  return (
    <form className="add-form">
<div className="form-control">
<label>Task</label>
<input type="text" placeholder="Task"></input>
</div>
<div className="form-control">
<label>Date and Time</label>
<input type="text" placeholder="Date and time"></input>
</div>
<div className="form-control-check">
<label>Set Reminder</label>
<input type="checkbox" ></input>
</div>
<div className="form-control">
<button type="submit" className="submit-btn">Save</button>
</div>
</form>
  )
}

export default Form;
