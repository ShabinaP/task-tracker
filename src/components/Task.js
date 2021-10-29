import React from "react";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      day: PropTypes.string,
      reminder: PropTypes.bool,
    })
  ),
}.isRequired;

export default Task;
