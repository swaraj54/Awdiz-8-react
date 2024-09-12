import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Child rendered.");
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add New Todo</button>
    </div>
  );
};

export default memo(Todos);
// todos = [], []
// addTodo = ()=>{} == ()=>{} recreate => stop
