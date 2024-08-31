import React from "react";

const Featured = (props) => {
  return (
    <>
      <p>{props.name.name}</p>
      <p>{props.name.email}</p>
    </>
  );
};

export default Featured;
