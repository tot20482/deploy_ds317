import React from "react";

const Prediction = () => {
  const inputBox = {
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };
  const textInput = {
    fontSize: 15,
    color: "#475160",
  };
  const input = {
    fontSize: 12,
    width: "300px",
    padding: 4,
    borderWidth: "1px",
    borderColor: "#042440",
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
        }}
      >
        <div style={inputBox}>
          <p style={textInput}>Năm sinh</p>
          <input type="text" placeholder="Nhập vào năm sinh" style={input} />
        </div>
        <div style={inputBox}>
          <p style={textInput}>Giới tính</p>
          <input type="text" placeholder="Nhập vào giới tính" style={input} />
        </div>
        <div style={inputBox}>
          <p style={textInput}>Điểm trung bình toàn khoa</p>
          <input
            type="text"
            placeholder="Nhập vào điểm trung bình toàn khoa"
            style={input}
          />
        </div>
        <div style={inputBox}>
          <p style={textInput}>Điểm trung bình tích lũy</p>
          <input
            type="text"
            placeholder="Nhập vào điểm trung bình tích lũy"
            style={input}
          />
        </div>
      </div>
      <div>
        <p>Bạn muốn dự đoán điểm trung bình học kỳ mấy ?</p>
        <input type="text" placeholder="Nhập vào số học kỳ" />
      </div>
    </div>
  );
};

export default Prediction;
