import { useContext } from "react";
import { DarkModeContext } from "./05-09-context/DarkModeContext";
function Login() {
  const { state, dispatch } = useContext(DarkModeContext);
  const ChangeTheme = () => {
    if (state.mode == "light") {
      dispatch({ type: "DARKMODE" });
    } else {
      dispatch({ type: "LIGHTMODE" });
    }
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
      <button onClick={ChangeTheme}>Change Theme Mode </button>
    </>
  );
}

export default Login;
