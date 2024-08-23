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

function App() {
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
      </Routes>
    </>
  );
}

// export function MyApp(){

// }
// export function MyApp(){

// }

export default App;
