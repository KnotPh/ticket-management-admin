import './userList.css'
import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { updateUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';


export default function User() {
    const location = useLocation();
    const {dispatch} = useContext(UserContext)
    const history = useHistory();
    let user = location.user;
    const [newUserDetali,setNewUserDetail] = useState(user);

    const handleChange = (e) => {
        let value = e.target.value;
        if(value === ""){
            value = null;
        }
        setNewUserDetail({...newUserDetali, [e.target.name]:value == null? e.preventDefault() :value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        updateUser(user._id,newUserDetali,dispatch);
        history.push("/users");
    }
    
    return (
        <div className="user">
            <div className="userContainer">
                <div className="userShow">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Username:  {user.username}</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Full Name:  {user.fullName}</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">E-mail:  {user.email}</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Age:  {user.age}</span>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder={user.username}
                                className="userUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Password</label>
                                <input
                                type="password"
                                name="password"
                                id="password"
                                className="userUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder={user.fullName}
                                className="userUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder={user.email}
                                className="userUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Age</label>
                                <input
                                type="number"
                                min='0'
                                name="age"
                                id="age"
                                placeholder={user.age}
                                className="userUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="createUserItem">
                                <label>Active</label>
                                <select name="isActive" id="isActive" defaultValue={user.isActive} onChange={handleChange}>
                                    <option value="true">Yes</option>
                                    <option value="false">NO</option>
                                </select>
                            </div>
                            <div className="userUpdateItem">
                                <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
