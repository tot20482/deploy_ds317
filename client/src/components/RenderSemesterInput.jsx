import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const RenderSemesterInput = ({
  semester,
  setRenderInput,
  setFormData,
  formData = {},
  resetFormData,
}) => {
  const [predict, setPredict] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const num = parseInt(semester, 9); // Chuyển semester thành số
  if (isNaN(num) || num <= 0) {
    setRenderInput(false);
  }
  const handleSemesterChange = (index, e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [`diemtbhk_${index + 1}`]: value,
    }));
  };
  const handleSubmit = () => {
    if (
      !formData.namsinh ||
      !formData.gioitinh ||
      !formData.dtb_toankhoa ||
      !formData.dtb_tichluy ||
      Object.values(formData).some((value) => value === "") // Check dynamic semester fields
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    } else {
      // Gửi dữ liệu lên server với key là 'formData'
      setFormData(formData);
      console.log("Form data: ", formData);
      // console.log("Kiểu dữ liệu của formData hiện tại:", typeof formData); // object
      axios
        .post("http://localhost:5000/predict", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("response.data.result", response.data.result);
          setPredict(response.data.result);
        })
        .catch((error) => console.error("Lỗi khi gửi dữ liệu:", error));
    }
  };
  return (
    <>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {Array.from({ length: num - 1 }).map((_, index) => (
            <div className="input-container" key={index}>
              <p>Điểm trung bình học kỳ {index + 1}</p>
              <input
                type="text"
                placeholder={`Nhập vào điểm học kỳ ${index + 1}`}
                onChange={(e) => handleSemesterChange(index, e)}
              />
            </div>
          ))}
        </div>
        <button
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            background: "linear-gradient(to right, #0F0C29, #302B63 )",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            marginTop: 10,
          }}
          onClick={() => {
            setIsOpen(true);
            handleSubmit();
          }}
        >
          <p style={{ fontWeight: "bold", color: "#fff" }}>Predict Score</p>
        </button>
      </div>
      {isOpen && predict !== undefined && (
        <Modal
          setRenderInput={setRenderInput}
          semester={semester}
          predict={predict}
          setIsOpen={setIsOpen}
          resetFormData={resetFormData}
        />
      )}
    </>
  );
};

export default RenderSemesterInput;
