import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  user: { userId: "ftgyu3h4i35465766453", role: "superadmin" },
  counter: 101,
};

// Higher order component -> its accept another component as parameter.

function ParentAuthComponent({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  //useeffect to detech refresh behaviour
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ParentAuthComponent;
