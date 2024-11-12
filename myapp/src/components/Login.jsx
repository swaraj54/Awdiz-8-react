import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "./axiosConfig";
import { AuthContext } from "./context/AuthContext";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name, "check");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  // localhost:8000/api/v1/auth/register

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        let response = await api.post("/auth/login", { userData });
        // response = {
        //   data: { success: true, message: "Register succesfulyy comp;leted." },
        // };
        if (response.data.success) {
          // console.log(response);
          // alert(response.data.message);
          dispatch({ type: "LOGIN", payload: response.data.userData });
          toast.success(response.data.message);
          router("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("All fields are required.");
    }
  }

  // var myobject = {};
  // myobject.hi = "hii";
  // myobject["event.target.name"] = event.target.value
  // {[event.target.name] : event.target.value}

  return (
    <div>
      <h1>Login :</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Type your email.."
          name="email"
          required
        />
        <br />
        <label>Password </label>
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Type your password.."
          name="password"
          required
        />
        <br />
        <input type="submit" value="Login " />
      </form>
    </div>
  );
}
export default Login;
