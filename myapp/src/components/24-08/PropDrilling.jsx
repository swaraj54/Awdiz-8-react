import React from "react";

const PropDrilling = (props) => {
  const { students, isCompletedAssignment, counter, Increment } = props;
  console.log(
    students,
    "students",
    isCompletedAssignment,
    "isCompletedAssignment"
  );
  return (
    <div>
      <h1>Props dirlling</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default PropDrilling;
