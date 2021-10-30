import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        handleOnClick={onAdd}
      />
    </header>
  );
};

Header.propTypes = {
  onAdd: PropTypes.func,
}.isRequired;

export default Header;
