import React, { useState } from "react";
import LogIn from "./(auth)/logIn";
import PredictionRoot from "./Prediction/prediction";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <LogIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <PredictionRoot />
      )}
    </>
  );
};

export default App;
