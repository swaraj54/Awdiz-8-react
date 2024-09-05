import { createContext, useReducer } from "react";
// step 1
// create instance of createContext(), create reducer , initial state and HOC

export const DarkModeContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      return { ...state, mode: "dark" };
    case "LIGHTMODE":
      return { ...state, mode: "light" };
    default:
      return state;
  }
};

const InitialState = { mode: "light" };

const ParentComponetForDarkModeContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default ParentComponetForDarkModeContext;
