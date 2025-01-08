import React from "react";
import UpdatedComponent from "./HOC";

const Person1 = ({money,handleIncrease}) => {
 
  return (
    <>
      <h3>Roman Reigns is offering the amount ${money}</h3>
      <button
        onClick={handleIncrease}
      >Increase Money</button>
    </>
  );
};
export default UpdatedComponent(Person1);
