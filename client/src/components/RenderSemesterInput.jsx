import React from "react";
import axios from "axios";

const RenderSemesterInput = ({
  semester,
  setRenderInput,
  setFormData,
  formData,
}) => {
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
      setFormData(formData);
      console.log("Form data: ", formData);
      axios
        .post("http://localhost:5000/predict", formData)
        .then((response) => {
          console.log("Kết quả dự đoán:", response.data);
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu:", error);
        });
    }
  };
  return (
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
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 8,
          paddingRight: 8,
          background: "linear-gradient(to right, #79CCEC, #1CA7EC )",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          marginTop: 10,
        }}
        onClick={() => {
          setRenderInput(false);
          handleSubmit();
        }}
      >
        <p style={{ fontWeight: "bold", color: "#fff" }}>Predict Score</p>
      </button>
    </div>
  );
};

export default RenderSemesterInput;
