import React,{useContext,useState} from "react";
import UserContext from "./usercontext"

function EditUser(props){
  let [name,email,index] =props.match.params.id.split("+")
  // console.log(props.match.params.id)
  // console.log(name,email,index)
    let users = useContext(UserContext)

  let [editName,setEditName] = useState(name)
  let [editEmail,setEditEmail] = useState(email)
  let userData ={editName,editEmail}
    return(
        <>
        <h1>{editName}</h1>
        <form onSubmit ={(e)=>{
        e.preventDefault()
        users.userList.splice(index,1,userData)
        users.setUserList([...users.userList])
        setEditName("")
        setEditEmail("")
      }}>
      <div className="Container">
        <div className="row">
          <div className="col-lg-6">
            <label>EditUserName</label>
            <input
              className="form-control"
              type="text"
              placeholder="YourName"
              value = {editName}
              onChange ={(e)=> setEditName(e.target.value)}
            /> <br/>
            <label>Edit e-mailAddress</label>
            <input
              className="form-control"
              type="text"
              placeholder="name@email.com"
              value = {editEmail}
              onChange ={(e)=> setEditEmail(e.target.value)}
            />
          </div>
        </div><br/>
        <div className ="col-lg-2">
            <button className="btn btn-info">Confirm</button>

        </div>
      </div>
      {/* <button onClick={()=>{users.setUserList([...users.userList,{userName:"kumar",age:30}])}}>Add</button> */}
      
        {/* <p>Edit: user-{props.match.params.id} </p> */}
        </form>
        </>
    );
}

export default EditUser;