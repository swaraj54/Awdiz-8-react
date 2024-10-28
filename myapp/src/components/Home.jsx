import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state, "state");

  function Increment() {
    // JavaScript =>   JSON => JavaScript object notation
    // const testObject = { name: "Awdiz", age: 10 };
    // console.log(JSON.stringify(testObject), "js to json converted object.");
    // JSON.stringify() JS -> JSON
    // JSON.parse() JSON -> JS
    // localStorage.setItem(
    //   "myfulldata",
    //   JSON.stringify({ name: "Awdiz", age: 10 })
    // );
    // const dataFromLS = JSON.parse(localStorage.getItem("myfulldata"));
    // console.log(dataFromLS?.name , "dataFromLS")
    // localStorage.removeItem("darkyMode")
    dispatch({ type: "INCREMENT" });
  }

  return (
    <div>
      Home <h1>counter : {state?.user?.name}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
}

export default Home;
