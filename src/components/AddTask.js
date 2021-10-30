import React, { useState } from "react";

const AddTask = () => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="task">
          Task
          <input
            id="task"
            type="text"
            placeholder="Add task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="dayandtime">
          Day & Time
          <input
            id="dayandtime"
            type="text"
            placeholder="Add day and time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">
          Set Reminder
          <input
            id="reminder"
            type="checkbox"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </label>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;