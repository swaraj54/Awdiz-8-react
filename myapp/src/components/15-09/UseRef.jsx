import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  console.log("Rerendering..");

  const counterRef = useRef(10);
  console.log(counterRef.current, "counterRef");

  function IncrementRef() {
    counterRef.current++;
    console.log(counterRef.current, "counterRef.current");
  }

  return (
    <div>
      <h1>Counter From Ref : {counterRef.current}</h1>
      <button onClick={IncrementRef}>+ For Ref</button>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseRef;
