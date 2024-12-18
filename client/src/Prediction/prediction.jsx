import React from "react";
import Header from "../components/Header";
import Prediction from "../components/Prediction";

const PredictionRoot = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#fff" }}>
      <Header />
      <Prediction />
    </div>
  );
};

export default PredictionRoot;
