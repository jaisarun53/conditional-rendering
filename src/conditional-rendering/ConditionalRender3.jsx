import React from "react";

const ConditionalRender3 = () => {
  let num = 0;
  return (
    <div>
      {num < 0 ? (
        <P>nunber is negative</P>
      ) : num < 0 ? (
        <p>number is postive</p>
      ) : (
        <p>number neutral 0</p>
      )}
    </div>
  );
};

export default ConditionalRender3;
