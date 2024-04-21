import React from "react";
const ConditionalRender1 = () => {
  let isDayTime = true;
  if (isDayTime) {
    return <p>good day</p>;
  }
  if (!isDayTime) {
    return <p>good night</p>;
  }
};
export default ConditionalRender1;
