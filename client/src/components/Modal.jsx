import React from "react";

const Modal = ({ resetFormData, semester, predict, setIsOpen }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: 8,
          minWidth: "400px",
          textAlign: "center",
        }}
      >
        <h5>Điểm trung bình của học kì {semester} của bạn là:</h5>
        <h2>{Math.ceil(predict * 100) / 100}</h2>
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
            resetFormData();
            setIsOpen(false);
          }}
        >
          <p style={{ fontWeight: "bold", color: "#fff" }}>OK</p>
        </button>
      </div>
    </div>
  );
};

export default Modal;
