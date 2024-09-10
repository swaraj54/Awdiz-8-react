import React, { useMemo, useState } from "react";

const UseMemo2 = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);

  //   const heavyCalculatedValue = heavyCalculationFunction(counter);
  const heavyCalculatedValue = useMemo(() => {
    heavyCalculationFunction(counter);
  }, [counter]);
  return (
    <div>
      <h1>Heavy Calculated value : {heavyCalculatedValue}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <button onClick={() => setTodos([...todos, "Do assignment."])}>
        Add New Todo
      </button>
    </div>
  );
};

function heavyCalculationFunction(number) {
  console.log("Calculation started..");
  for (var i = 0; i < 1000000000; i++) {
    number += i;
  }
  return number;
}

export default UseMemo2;
