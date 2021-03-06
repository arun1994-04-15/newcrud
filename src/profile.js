import React from "module";

function Profile(){
    return(
        <>
        <div class="col-md-4">
    		    <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Tiger Nixon<small>Designer</small></h2>
                    <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                    </div>
                </div>
                <p class="mt-3 w-100 float-left text-center"><strong>Profile</strong></p>
    		</div>
        </>
    );
}

export default Profile;