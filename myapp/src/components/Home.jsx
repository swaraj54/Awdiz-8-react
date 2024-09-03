import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state, "state");

  function Increment() {
    dispatch({ type: "INCREMENT" });
  }

  return (
    <div>
      Home <h1>counter : {state?.counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
}

export default Home;
