import { createContext, useReducer } from "react";

const InitialState = { todos: null };

const Reduceer = (state, action) => {
  switch (action.type) {
    case "SAVETODOS":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduceer, InitialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
