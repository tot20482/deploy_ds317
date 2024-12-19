import React, { useState } from "react";

const LogIn = ({ setIsLoggedIn }) => {
  const [mssv, setMssv] = useState(""); // State lưu giá trị mssv

  // Hàm gửi dữ liệu mssv tới backend
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mssv_login: mssv }), // Gửi mssv_login dưới dạng JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Đăng nhập thành công:", data);
        setIsLoggedIn(true); // Đăng nhập thành công, chuyển đến trang sau
      } else {
        console.error("Lỗi khi đăng nhập");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "full",
        backgroundColor: "#212121",
      }}
    >
      <div
        style={{
          backgroundColor: "#f7fafc",
          width: "25%",
          minHeight: "35%",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <h2 style={{ color: "#06141B", marginBottom: 8 }}>Đăng nhập</h2>
        <label
          htmlFor="mssv"
          style={{ color: "#06141B", fontSize: 15, fontWeight: "semibold" }}
        >
          Mã số sinh viên
        </label>
        <input
          type="text"
          placeholder="Nhập vào mã số sinh viên"
          id="mssv"
          value={mssv} // Bind giá trị input với state
          onChange={(e) => setMssv(e.target.value)} // Cập nhật state khi nhập
          style={{
            outline: "none",
            padding: 10,
            width: "90%",
            borderRadius: 8,
            border: "none",
            backgroundColor: "#CCD0CF",
            marginTop: 8,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <button
            onClick={handleLogin} // Gọi hàm gửi dữ liệu khi nhấn nút
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              background: "linear-gradient(to right, #0F0C29, #302B63 )",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            <p style={{ fontWeight: "semibold", color: "#fff" }}>Đăng nhập</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
