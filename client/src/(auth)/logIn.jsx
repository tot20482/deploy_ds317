import React from "react";

const LogIn = ({ setIsLoggedIn }) => {
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
            onClick={() => {
              setIsLoggedIn(true);
            }}
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
