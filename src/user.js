import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { GetUserData } from "./api";
import UserContext from "./usercontext";
function User(){
    let users = useContext(UserContext)
    //let [userData,setuserData] = useState([])
    


    // useEffect(async () => {
    //     let users = await GetUserData();
    //     setuserData(...userData,users.data)
    //     console.log("Mounted")
    // },[]) // Did Mount

    // useEffect(() => {
    //     return () => {
    //         console.log("Unmounted")
    //     } // UnMount
    // },[])

    // useEffect(() => {
    //     console.log("Updated")
    //     // Did Update
    // },[userData])
    return(
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
                    </div>
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>EmailAddress</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {/* <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot> */}
                                    <tbody>
                                        {
                                            users.userList .map((user,index)=>{
                                                console.log(user)
                                                return(
                                                    <tr>
                                            <td>
                                                <Link to="/profile/{user.userName}">
                                                {user.userName}
                                                </Link>
                                            </td>
                                            <td>{user.userEmail}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                            <Link to={`/edituser/${user.userName}+${user.userEmail}+${index}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Edit</Link>
                                            </td>
                                        </tr>

                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                
        </>
    )

}

export default User;