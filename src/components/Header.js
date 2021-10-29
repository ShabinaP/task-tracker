import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const handleOnClick = () => {
    console.log("Click 2");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" handleOnClick={handleOnClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
