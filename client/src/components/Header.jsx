import React from "react";
import uit from "../assets/images/uit.png";

const Header = () => {
  return (
    <div style={{ height: "80px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 15,
          marginLeft: 20,
        }}
      >
        <img src={uit} alt="Logo UIT" style={{ width: "60px" }} />
        <h5
          style={{
            fontWeight: "bold",
            letterSpacing: 1,
            color: "#042440",
          }}
        >
          Trường đại học
          <br />
          Công nghệ Thông Tin
        </h5>
      </div>
    </div>
  );
};

export default Header;
