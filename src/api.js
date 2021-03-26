import axios from "axios";

export function GetUserData(){
    return axios.get (`https://605bf1136d85de00170d9031.mockapi.io/dashboarddata`)
}
 export function PostUserData(data){
     return axios.post(`https://605bf1136d85de00170d9031.mockapi.io/dashboarddata`,data)
 }
