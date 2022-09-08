import React from "react";
import Button from "./Button";

const Header = ({ color, showForm }) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color="green" showForm={showForm} />
    </div>
  );
};

export default Header;
