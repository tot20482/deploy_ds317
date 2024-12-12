import React from "react";

const Input = ({ title, placeholder, onChange, fieldName, value }) => {
  const handleChange = (e) => {
    onChange(fieldName, e.target.value);
  };
  return (
    <>
      {title === "Giới tính" ? (
        <div className="input-container">
          <label htmlFor="gentle">{title}</label>
          <select
            id="gentle"
            onChange={handleChange}
            defaultValue={""}
            value={value}
          >
            <option value="" disabled style={{ color: "#475160" }}>
              - Chọn giới tính -
            </option>
            <option value="0">Nam</option>
            <option value="1">Nữ</option>
          </select>
        </div>
      ) : (
        <div className="input-container">
          <p>{title}</p>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          />
        </div>
      )}
    </>
  );
};

export default Input;
