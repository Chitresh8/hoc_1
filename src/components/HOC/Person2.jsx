import React from "react";
import UpdatedComponent from "./HOC";

 const Person2 = ({money,handleIncrease}) => {

  return (
    <>
      <h3>Jimmy USO is offering the amount ${money}</h3>
      <button
        onClick={handleIncrease}
      >Increase Money</button>
    </>
  );
};
export default UpdatedComponent(Person2);