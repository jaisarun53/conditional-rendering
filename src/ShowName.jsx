import React from "react";

const ShowName = ({ studentName, address, collage }) => {
  return (
    <div>
      <p>Hey {studentName}, have a good day</p>
      <p>
        your address is {address}. you are graduated from {collage}
      </p>
    </div>
  );
};

export default ShowName;
