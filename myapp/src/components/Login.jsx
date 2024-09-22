import { useContext, useEffect } from "react";
import { DarkModeContext } from "./05-09-context/DarkModeContext";
function Login() {
  const { state, dispatch } = useContext(DarkModeContext);
  const ChangeTheme = () => {
    if (state.mode == "light") {
      dispatch({ type: "DARKMODE" });
    } else {
      dispatch({ type: "LIGHTMODE" });
    }
    // const response = {username :'swaraj54', url:"http"} 
    // successfully login dispatch({type : "LOGIN", pyalod : {username :'swaraj54'}})
    // 1. store data in cookies -> backend
    // 2. store userdata in context state
  };


  return (
    <>
      <p>Current Theme - {state.mode}</p>
      <h1
        style={{
          backgroundColor: state.mode == "light" ? "white" : "black",
          color: state.mode == "light" ? "black" : "white",
        }}
      >
        Login
      </h1>
      {state?.user?.username}
      <button onClick={ChangeTheme}>Change Theme Mode </button>
    </>
  );
}

export default Login;
