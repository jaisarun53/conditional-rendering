import React from "react";
import "./App.css";
import ShowName from "./ShowName";

const App = () => {
  return (
    <div>
      <ShowName studentName="Payal" />
      <ShowName studentName="Arun" />
    </div>
  );
};

export default App;
