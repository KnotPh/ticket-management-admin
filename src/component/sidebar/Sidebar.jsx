import "./sidebar.css"
import { Home,
    PermIdentity,
    ConfirmationNumber
  } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" style={{textDecoration:"none" , color:"inherit"}}>
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon" />
                                    Home
                            </li>
                        </Link>
                        <Link to="/users" style={{textDecoration:"none" , color:"inherit"}}>
                            <li className="sidebarListItem">
                                <PermIdentity   className="sidebarIcon" />
                                User 
                            </li>
                        </Link>
                        <Link to="/tickets" style={{textDecoration:"none" , color:"inherit"}}>
                            <li className="sidebarListItem">
                                <ConfirmationNumber  className="sidebarIcon" />
                                Ticket 
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
