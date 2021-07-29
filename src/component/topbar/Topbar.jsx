import React, { useContext } from 'react'
import { logout } from '../../context/authContext/AuthAction';
import { AuthContext } from '../../context/authContext/AuthContext'
import "./topbar.css"

export default function Topbar() {
    const {dispatch} = useContext(AuthContext);
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Ticket Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconCotainer" onClick={() => dispatch(logout())}>
                        Log out
                    </div>
                </div>
            </div>
        </div>
    )
}
