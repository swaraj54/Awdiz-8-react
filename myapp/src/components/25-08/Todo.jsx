import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");

  function submitTodo() {
    setTodos([...todos, singleTodo]);
    setSingleTodo("");
  }

  function handleInput(event) {
    // console.log(event.target.value);
    setSingleTodo(event.target.value);
  }

  console.log(singleTodo, "singleTodo");
  console.log(todos, "todos");

  return (
    <div>
      <h1>All Todo</h1>
      {todos.map((todo) => (
        <h3>{todo}</h3>
      ))}
      <input
        value={singleTodo}
        onChange={handleInput}
        placeholder="Type your todo here.."
      />
      <button onClick={submitTodo}>Submit Todo</button>
    </div>
  );
};

export default Todo;

// Steps 1 : state for [multiple todos ]
// step 2 : state for single todo
// Step 3 : function to add single todo into array of todos
// Step 4 : function to  store value into state from input Element .
// step 5 : rendering todos list
// step 6 input and button
