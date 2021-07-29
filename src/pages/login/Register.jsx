import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import "./login.css"

export default function Register() {
    const [user,setUser] = useState(null);
    const history = useHistory();

    const handleChange = (e) => {
        let value = e.target.value;
        if(value === ""){
            value = null;
        }
        setUser({...user, [e.target.name]:value == null? e.preventDefault() :value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("/auth/register", user);
        history.push("/login");
    }
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="text" id="username" name="username"  onChange={handleChange} />
            <label>Email</label>
            <input className="registerInput" type="text" id="email" name="email"  onChange={handleChange} />
            <label>Password</label>
            <input className="registerInput" type="password" id="password" name="password"  onChange={handleChange} />
            <label>Full Name</label>
            <input className="registerInput" type="text" id="full_name" name="full_name"  onChange={handleChange} />
            <label>Age</label>
            <input className="registerInput" type="number" min="0" id="age" name="age"  onChange={handleChange} />
            <button className="registerButton" onClick={handleSubmit}>Register</button>
        </form>
        <Link to={"/login"}>
            <button className="registerLoginButton">Login</button>
        </Link>
        </div>
    )
}