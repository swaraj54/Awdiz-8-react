import React, { memo } from "react";

const AnotherComponent = ({ counter2 }) => {
  console.log("Inside another component.");
  return <div>Another Component = {counter2}</div>;
};

export default memo(AnotherComponent);
// 1 2 3
