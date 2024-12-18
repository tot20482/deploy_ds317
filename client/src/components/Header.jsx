import React from "react";
import uit from "../assets/images/uit.png";

const Header = () => {
  return (
    <div
      style={{
        height: "80px",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 10,
          paddingRight: 100,
          marginLeft: 40,
          marginRight: 60,
          borderBottom: "2px solid #302B63",
          // borderColor: "linear-gradient(to right, #79CCEC, #1CA7EC )",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img src={uit} alt="Logo UIT" style={{ width: "60px" }} />
          <h5
            style={{
              fontWeight: "bold",
              color: "#4a63b8",
            }}
          >
            Trường đại học
            <br />
            Công nghệ Thông Tin
          </h5>
        </div>
        <h5
          style={{
            fontWeight: "bold",
            color: "#4a63b8",
            fontSize: 16,
          }}
        >
          Khai phá dữ liệu trong doanh nghiệp - DS317
        </h5>
        <h5
          style={{
            fontWeight: "bold",
            letterSpacing: 1,
            color: "#4a63b8",
          }}
        >
          Nhóm 7
        </h5>
      </div>
    </div>
  );
};

export default Header;
