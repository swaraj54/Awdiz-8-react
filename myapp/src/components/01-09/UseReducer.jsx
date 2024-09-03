import React, { useReducer } from "react";

function Reducer(state, action) {
  console.log(state, action, "state, action");
  // action = {type : "DECRREMENT"}
  // state = { counter: 100 }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 100 };
    default:
      return state;
  }
}

const InitialState = { counter: 100, user: null };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  function Increment() {
    dispatch({ type: "INCREMENT" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }
  return (
    <div>
      <h1>Counter : {state.counter} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default UseReducer;
