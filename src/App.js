import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import UserList from "./pages/user/UserList";
import User from "./pages/user/User";
import CreateUser from "./pages/user/CreateUser";
import TicketList from "./pages/ticket/TicketList";
import Ticket from "./pages/ticket/Ticket";
import CreateTicket from "./pages/ticket/CreateTicket";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Transaction from "./pages/transaction/Transaction";

function App() {
  
  const {user} = useContext(AuthContext);
  return (
    <Router>
        {!user? <Redirect to="/"/> : <Topbar/>}
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">{user? <Redirect to="/"/> : <Login/>}</Route>
          <div className="container">
            <Sidebar/>
              <Route exact path="/">
                {!user? <Redirect to="/login"/> : <Home/>}
              </Route>
              <Route path="/users">
                {!user? <Redirect to="/login"/> : <UserList/>}
              </Route>
              <Route path="/transaction/ticket/:id">
                {!user? <Redirect to="/login"/> : <Transaction/>}
              </Route>
              <Route path="/user/:id">
                {!user? <Redirect to="/login"/> : <User/>}
              </Route>
              <Route path="/createUser">
                {!user? <Redirect to="/login"/> : <CreateUser/>}
              </Route>
              <Route path="/tickets">
                {!user? <Redirect to="/login"/> : <TicketList/>}
              </Route>
              <Route path="/ticket/:id">
                {!user? <Redirect to="/login"/> : <Ticket/>}
              </Route>
              <Route path="/createTicket">
                {!user? <Redirect to="/login"/> : <CreateTicket/>}
              </Route>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
