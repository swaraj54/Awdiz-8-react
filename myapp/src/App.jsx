import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Navbar from "./components/21-08/Navbar";
import Counter from "./components/21-08/Counter";
import UseEffect1 from "./components/23-08/UseEffect1";
import UseEffect2 from "./components/23-08/UseEffect2";
import UseEffect3 from "./components/23-08/UseEffect3";
import UseEffect4 from "./components/23-08/UseEffect4";
import UseParams from "./components/24-08/UseParams";
import PropDrilling from "./components/24-08/PropDrilling";
import { useState } from "react";
import Mapping from "./components/24-08/Mapping";
import Mapping2 from "./components/24-08/Mapping2";
import TerneryOperator from "./components/25-08/TerneryOperator";
import StyledComponets from "./components/25-08/StyledComponets";
import Todo from "./components/25-08/Todo";

function App() {
  const [students, setStudents] = useState([
    "virat",
    "rohit",
    "rahul",
    "rishabh",
  ]);

  const [counter, setCounter] = useState(1);
  function Increment() {
    setCounter(counter + 1);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/useeffect-1" element={<UseEffect1 />} />
        <Route path="/useeffect-2" element={<UseEffect2 />} />
        <Route path="/useeffect-3" element={<UseEffect3 />} />
        <Route path="/useeffect-4" element={<UseEffect4 />} />
        <Route path="/product/:id" element={<UseParams />} />
        <Route
          path="/props"
          element={
            <PropDrilling
              students={["virat", "rohit", "rahul"]}
              isCompletedAssignment={true}
              counter={counter}
              Increment={Increment}
            />
          }
        />
        <Route path="/mapping" element={<Mapping students={students} />} />
        <Route path="/mapping2" element={<Mapping2 />} />
        <Route path="/ternery-operator" element={<TerneryOperator />} />
        <Route path="/styled-components" element={<StyledComponets />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

// export function MyApp(){

// }
// export function MyApp(){

// }

export default App;
