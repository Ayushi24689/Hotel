import React from "react";
import Featured from "./Featured";

const Map = () => {
  //   const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const users = [
    { name: "abc1", email: "abc1@gmail.com" },
    { name: "abc2", email: "abc2@gmail.com" },
    { name: "abc3", email: "abc3@gmail.com" },
    { name: "abc4", email: "abc4@gmail.com" },
    { name: "abc5", email: "abc5@gmail.com" },
    { name: "abc6", email: "abc6@gmail.com" },
    { name: "abc7", email: "abc7@gmail.com" },
    { name: "abc8", email: "abc8@gmail.com" },
    { name: "abc9", email: "abc9@gmail.com" },
    { name: "abc10", email: "abc10@gmail.com" },
  ];
  return (
    <>
      {/* {arr.map((i) => {
        return (
          <>
            <h1>{i}</h1>
          </>
        );
      })}

      {users.map((props) => {
        return (
          <>
            <p>{props.email}</p>
          </>
        );
      })} */}

      {users.map((i) => (
        <Featured name={i} />
      ))}
    </>
  );
};

export default Map;
