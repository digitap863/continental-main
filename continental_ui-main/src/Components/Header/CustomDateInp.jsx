import React from "react";

const CustomDateInp = ({ value, onClick }) => {
  return (
    <input
      className="date_input"
      type="text"
      value={value}
      onClick={onClick}
      placeholder="Select date"
    />
  );
};

export default CustomDateInp;
