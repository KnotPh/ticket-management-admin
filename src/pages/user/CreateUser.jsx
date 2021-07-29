import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';
import './userList.css'

export default function CreateUser() {
    const [user,setUser] = useState(null);
    const {dispatch} = useContext(UserContext)
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
        createUser(user,dispatch);
        history.push("/users");
    }

    return (
        <div className="createUser">
            <h1 className="createUserTitle">New User</h1>
                <div className="createUserItem">
                    <label>Username</label>
                    <input type="text" id="username" name="username"  onChange={handleChange}/>
                </div>
                <div className="createUserItem">
                    <label>Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange}/>
                </div>
                <div className="createUserItem">
                    <label>Full Name</label>
                    <input type="text" id="full_name" name="full_name" onChange={handleChange}/>
                </div>
                <div className="createUserItem">
                    <label>Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                </div>
                <div className="createUserItem">
                    <label>Age</label>
                    <input type="number" min='0' id="age" name="age" onChange={handleChange}/>
                </div>
                <div className="createUserItem">
                    <label>Active</label>
                    <select name="isActive" id="is_active" defaultValue={true} onChange={handleChange}>
                     <option value="true">Yes</option>
                     <option value="false">NO</option>
                    </select>
                </div>
                <button className="createUserButton"  onClick={handleSubmit}>Create</button>
        </div>
    )
}

