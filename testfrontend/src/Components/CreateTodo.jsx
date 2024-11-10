import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
const CreateTodo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState(null);
  //   console.log(todo, "todo");
  const handleSubmit = async () => {
    try {
      if (!todo) {
        return alert("Todo is required.");
      }
      const response = await axios.post("http://localhost:8000/create-todo", {
        taskName: todo,
      });
      if (response.data.success) {
        alert(response.data.message);
        setTodo(null);
        getTodos();
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/view-todos");
      if (response.data.success) {
        dispatch({ type: "SAVETODOS", payload: response.data.allTodos });
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Create Todo</h1>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateTodo;
