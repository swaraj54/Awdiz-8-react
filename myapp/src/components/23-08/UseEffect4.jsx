import { useEffect, useState } from "react";

function UseEffect4() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(2);
  function Increment() {
    setCounter(counter + 1);
  }
  function Increment2() {
    setCounter2(counter2 + 1);
  }
  useEffect(() => {
    console.log("Hi from useffect 4.");
  }, [counter, counter2]);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={Increment2}>+</button>
    </div>
  );
}
export default UseEffect4;
