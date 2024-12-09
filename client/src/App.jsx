import React from "react";
import Header from "./components/Header";
import Prediction from "./components/Prediction";

const App = () => {
  return (
    <div style={{ marginBottom: 20, width: "100vw" }}>
      <Header />
      <Prediction />
    </div>
  );
};

export default App;
