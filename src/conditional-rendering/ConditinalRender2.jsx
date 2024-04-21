import React from "react";

const ConditinalRender2 = () => {
  let isDay = false;
  return <div>{isDay ? <P>good day</P> : <p>good night</p>}</div>;
};

export default ConditinalRender2;
