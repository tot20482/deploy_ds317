import React, { useState } from "react";
import RenderSemesterInput from "./RenderSemesterInput";
import Input from "./Input";

const inputBox = [
  {
    title: "Năm sinh",
    placeholder: "Nhập vào năm sinh",
  },
  {
    title: "Giới tính",
    placeholder: "Nhập vào giới tính",
  },
  {
    title: "Điểm trung bình toàn khoa",
    placeholder: "Nhập vào điểm trung bình toàn khoa",
  },
  {
    title: "Điểm trung bình tích lũy",
    placeholder: "Nhập vào điểm trung bình tích lũy",
  },
];

const Prediction = () => {
  const [semester, setSemester] = useState("0");
  const [renderInput, setRenderInput] = useState(false);

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
          Bạn muốn dự đoán điểm trung bình học kỳ mấy ?
        </p>
        <input
          type="text"
          placeholder="Nhập vào số học kỳ"
          style={{
            padding: 4,
            borderWidth: 1,
            borderColor: "#1CA7EC",
            fontSize: 14,
            textAlign: "center",
            borderRadius: 4,
            outline: "none",
          }}
          onChange={(e) => {
            setSemester(e.target.value);
          }}
        />

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
        />
      )}
    </div>
  );
};

export default Prediction;
