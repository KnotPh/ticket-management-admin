import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const {isFetching,dispatch} = useContext(AuthContext);

  const handleLogin = (e)=>{
    e.preventDefault();
    login({username,password}, dispatch);
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input 
          className="loginInput" 
          type="text" 
          placeholder=" Username" 
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password"
          placeholder="password" 
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button 
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <Link to={"register/"}>
        <button 
          className="loginRegisterButton" 
        >
          Register
        </button>
    </Link>
    </div>
  );
}