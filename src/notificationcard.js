import React from "react";

function NotificationCard(props){
    return(
        <>
        <div class="col-xl-3 col-md-6 mb-4 notificationcard"  onClick={()=>props.cardClick(props.data.cardTitle)}>
                            <div class={`card border-left-${props.data.color} shadow h-100 py-2`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class={`text-xs font-weight-bold text-${props.data.color} text-uppercase mb-1`}>
                                                {props.data.cardTitle} (Monthly)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.data.currency}{props.data.Value}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={`${props.data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    );
}

export default NotificationCard;