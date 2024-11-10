import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todoContext";

const ViewTodos = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [allTodos, setAllTodos] = useState(null);
  console.log(allTodos, "allTodos");

  useEffect(() => {
    if (state?.todos) {
      setAllTodos(state.todos);
    }
  }, [state]);

  return (
    <div>
      {allTodos &&
        (allTodos.length > 0 ? (
          <div>
            {allTodos.map((todo, i) => (
              <h2 key={todo._id}>
                {i + 1}. {` `}
                {todo.taskName}
              </h2>
            ))}
          </div>
        ) : (
          <div>0 todos found.</div>
        ))}
    </div>
  );
};

export default ViewTodos;
