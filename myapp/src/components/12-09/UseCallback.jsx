import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [counter, setCounter] = useState(1); // 2
  const [todos, setTodos] = useState([]);
  // const AddNewTodo = () => {
  //   setTodos([...todos, "My new todo."]);
  // };
  const AddNewTodo = useCallback(() => {
    setTodos([...todos, "My new todo."]);
  }, [todos]);
  //   console.log("Parent component re-rendered.");
  return (
    <div>
      <h1> counter - {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <Todos todos={todos} addTodo={AddNewTodo} />
    </div>
  );
};

export default UseCallback;
