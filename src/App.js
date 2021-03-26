import logo from './logo.svg';
import './App.css';
import Topbar from "./topbar";
import Sidebar from "./sidebar"
import Dashboard from './dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./user"
import CreateUser from './create-user';
import EditUser from "./edituser"
import Profile from "./profile";
import { UserProvider } from "./usercontext"


function App() {
  return (
    <>
    <Router>
    <div id="wrapper">
            <Sidebar></Sidebar>
            <UserProvider>
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Topbar></Topbar>
                <div class="container-fluid">
                <Switch>
                  <Route path ="/" exact="true">
                    <Dashboard></Dashboard>
                  </Route>
                  <Route path ="/user"exact="true">
                    <User></User>
                  </Route>
                  <Route path ="/create-user"exact="true">
                    <CreateUser></CreateUser>
                  </Route>
                  <Route path ="/edituser/:id" component={EditUser} exact={true}/>  //component is used to fetch the information same as of data used previously
                  <Route path ="/profile/:id" component={Profile} exact={true}/>
                </Switch>
                </div>
                </div>
            </div>
            </UserProvider>
        </div>
        </Router>
        </>
  );
}

export default App;
