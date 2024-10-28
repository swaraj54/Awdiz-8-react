import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { state } = useContext(AuthContext);
  const router = useNavigate();

  function redirectToProducts() {
    router("/all-products");
  }

  function redirectToHome() {
    // alert("Hi from function");
    router("/");
  }
  function redirectToLogin() {
    router("/login");
  }
  function redirectToRegister() {
    router("/register");
  }

  return (
    <div className="parentDiv">
      <h1 onClick={redirectToHome}>Home</h1>
      <h1 onClick={redirectToProducts}>Products</h1>
      {state?.user?.name && <h1>Welcome! {state?.user?.name}</h1>}
      <h1 onClick={redirectToLogin}>Login</h1>
      <h1 onClick={redirectToRegister}>Register</h1>
    </div>
  );
}

export default Navbar;
