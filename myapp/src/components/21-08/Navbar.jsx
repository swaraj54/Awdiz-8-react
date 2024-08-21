import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const router = useNavigate();

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
      <h1 onClick={redirectToLogin}>Login</h1>
      <h1 onClick={redirectToRegister}>Register</h1>
    </div>
  );
}

export default Navbar;
