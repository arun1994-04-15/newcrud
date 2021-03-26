import React,{useState} from "react";
import NotificationCard from "./notificationcard"


function Dashboard(props)
{
    let notificationcard =[
        {cardTitle:"EARNINGS (MONTHLY)" , Value:"40,000",currency:"$",color:"primary",icon:"fas fa-calendar",isprogress:false},
        {cardTitle:"Earnings (Annual)" , Value:"215,000",currency:"$",color:"success",icon:"fas fa-dollar-sign",isprogress:false},
        {cardTitle:"Tasks" , Value:"50%",color:"info",icon:"fas fa-clipboard-list",isprogress:true},
        {cardTitle:"Pending Requests" , Value:"18",color:"warning",icon:"fas fa-comments",isprogress:false},
    ]

    const[card,setCard] = useState("None")

    let handleCardClick = (cardTitle) =>{
        setCard(cardTitle)
    }
    return(
        
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">{
                    notificationcard.map((card)=>{
                        return <NotificationCard data={card} cardClick={handleCardClick}></NotificationCard>
                    })
                }
                    </div>

                    {card}
        </>
    );
}

export default Dashboard;