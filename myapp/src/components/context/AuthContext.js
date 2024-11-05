import { createContext, useEffect, useReducer } from "react";
import api from "../axiosConfig";

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
  user: null,
  counter: 101,
};

// Higher order component -> its accept another component as parameter.

function ParentAuthComponent({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  //useeffect to detech refresh behaviour
  useEffect(() => {
    // alert("Page refreshed.");
    async function getCurrentUser() {
      try {
        const response = await api.post("/auth/get-current-user");
        console.log(response.data,"data in get current user")
        if (response.data.success) {
          dispatch({ type: "LOGIN", payload: response.data.userData });
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ParentAuthComponent;
