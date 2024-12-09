import React from "react";

const RenderSemesterInput = ({ semester, setRenderInput }) => {
  const num = parseInt(semester, 9); // Chuyển semester thành số
  if (isNaN(num) || num <= 0) {
    setRenderInput(false);
  }
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
          setRenderInput(true);
        }}
      >
        <p style={{ fontWeight: "bold", color: "#fff" }}>Predict Score</p>
      </button>
    </div>
  );
};

export default RenderSemesterInput;
