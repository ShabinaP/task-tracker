import React from "react";
import "../index.css";
import PropTypes from "prop-types";

const Button = ({ color, text, handleOnClick }) => {
  return (
    <div>
      <button
        onClick={handleOnClick}
        style={{ backgroundColor: color }}
        type="submit"
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  handleOnClick: PropTypes.func,
}.isRequired;

export default Button;
