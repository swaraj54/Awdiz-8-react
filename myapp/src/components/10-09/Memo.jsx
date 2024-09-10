import React, { useState } from "react";
import AnotherComponent from "./AnotherComponent";

const Memo = () => {
  const [counter, setCounter] = useState(1); // 2  3
  const [counter2, setCounter2] = useState(100);
  return (
    <div>
      <h1>Memo counter = {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {/* <AnotherComponent counter2={counter} /> */}
      <AnotherComponent counter2={counter2} />
    </div>
  );
};

export default Memo;
