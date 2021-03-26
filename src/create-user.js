import React,{useContext,useState} from "react";
import { PostUserData } from "./api";
import UserContext from "./usercontext"

function CreateUser(props) {
  let users = useContext(UserContext)

  let [userName,setUserName] = useState("")
  let [userEmail,setUserEmail] = useState("")
  let userData ={userName,userEmail}
  
  return (
    <>
      <form onSubmit ={(e)=>{
        e.preventDefault()
        users.setUserList([...users.userList,userData])
        console.log(userData)
      //  await PostUserData(userData)
        setUserName("")
        setUserEmail("")
      }}>
      <div className="Container">
        <div className="row">
          <div className="col-lg-6">
            <label>UserName</label>
            <input
              className="form-control"
              type="text"
              placeholder="YourName"
              value ={userName} onChange ={(e)=>
              setUserName(e.target.value)}
            /> <br/>
            <label>EmailAddress</label>
            <input
              className="form-control"
              type="text"
              placeholder="name@email.com"
              value ={userEmail} onChange ={(e)=>
                setUserEmail(e.target.value)}
            />
          </div>
        </div><br/>
        <div className ="col-lg-2">
            <button className="btn btn-info">Add User</button>

        </div>
      </div>
      {/* <button onClick={()=>{users.setUserList([...users.userList,{userName:"kumar",age:30}])}}>Add</button> */}
      </form>
    </>
  );
}

export default CreateUser;
