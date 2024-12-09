import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <div className="input-container">
      <p>{title}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
