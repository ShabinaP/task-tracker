import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      day: PropTypes.string,
      reminder: PropTypes.bool,
    })
  ),
}.isRequired;

export default Tasks;
