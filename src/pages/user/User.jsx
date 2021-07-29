import './userList.css'
import { useLocation } from 'react-router-dom';


export default function User() {
    const location = useLocation();
    let user = location.user;
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
                                placeholder={user.username}
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Password</label>
                                <input
                                type="password"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                placeholder={user.fullName}
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                placeholder={user.email}
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Age</label>
                                <input
                                type="number"
                                min='0'
                                placeholder={user.age}
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="createUserItem">
                                <label>Active</label>
                                <select name="isActive" id="isActive" defaultValue={true}>
                                    <option value="true">Yes</option>
                                    <option value="false">NO</option>
                                </select>
                            </div>
                            <div className="userUpdateItem">
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
