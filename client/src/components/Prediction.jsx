import React, { useState } from "react";
import RenderSemesterInput from "./RenderSemesterInput";
import Input from "./Input";

const inputBox = [
  {
    title: "Năm sinh",
    placeholder: "Nhập vào năm sinh",
    fieldName: "namsinh",
  },
  {
    title: "Giới tính",
    placeholder: "Nhập vào giới tính",
    fieldName: "gioitinh",
  },
  {
    title: "Điểm trung bình toàn khoa",
    placeholder: "Nhập vào điểm trung bình toàn khoa",
    fieldName: "dtb_toankhoa",
  },
  {
    title: "Điểm trung bình tích lũy",
    placeholder: "Nhập vào điểm trung bình tích lũy",
    fieldName: "dtb_tichluy",
  },
  {
    title: "Số tín chỉ tích lũy",
    placeholder: "Nhập vào số tín chỉ tích lũy",
    fieldName: "sotc_tichluy",
  },
];

const Prediction = () => {
  const [formData, setFormData] = useState({
    namsinh: "",
    gioitinh: "",
    dtb_toankhoa: "",
    dtb_tichluy: "",
    sotc_tichluy: "",
  });
  const [semester, setSemester] = useState("0");
  const [selectedValue, setSelectedValue] = useState("");
  const [renderInput, setRenderInput] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h1
        style={{
          color: "#042440",
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        Dự đoán điểm trung bình của bạn
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginTop: 10,
        }}
      >
        {inputBox.map((item, index) => (
          <Input
            key={index}
            title={item.title}
            placeholder={item.placeholder}
            onChange={handleInputChange}
            fieldName={item.fieldName}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          gap: 8,
        }}
      >
        <p style={{ fontSize: 18, fontWeight: "bold", color: "#1965B3" }}>
          Bạn muốn dự đoán điểm trung bình học kì mấy ?
        </p>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <select
            id="semester"
            value={selectedValue}
            onChange={(e) => {
              setSemester(e.target.value);
              setSelectedValue(e.target.value);
            }}
            style={{
              fontSize: "14px",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "20px",
              paddingRight: "20px",
              border: "1px solid #1965B3",
              borderRadius: "4px",
              cursor: "pointer",
              outline: "None",
            }}
          >
            <option value="" disabled>
              - Chọn học kỳ -
            </option>
            <option value="2">Học kì 2</option>
            <option value="3">Học kì 3</option>
            <option value="4">Học kì 4</option>
            <option value="5">Học kì 5</option>
            <option value="6">Học kì 6</option>
            <option value="7">Học kì 7</option>
            <option value="8">Học kì 8</option>
          </select>
        </div>

        <button
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            background: "linear-gradient(to right, #79CCEC, #1CA7EC )",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setRenderInput(true);
          }}
        >
          <p style={{ fontWeight: "bold", color: "#fff" }}>OK</p>
        </button>
      </div>
      {renderInput && (
        <RenderSemesterInput
          semester={semester}
          setRenderInput={setRenderInput}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </div>
  );
};

export default Prediction;