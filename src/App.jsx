import React from "react";
import "./App.css";
import ConditionalRender1 from "./ConditionalRender1";
import ConditinalRender2 from "./ConditinalRender2";
import ConditionalRender3 from "./ConditionalRender3";

const App = () => {
  return (
    <div>
      {/* <ConditionalRender1 /> */}
      <ConditionalRender3 />
      {/* <ConditinalRender2 /> */}
    </div>
  );
};

export default App;
