import React from 'react';
import {Link} from 'react-router-dom';
import star from './star.jpeg';
import helsinki_mibile from './helsinki-mobile.jpeg';
import helsi_purple from './helsinki-ppt-1.x650.jpeg';
function CodeTwo(){
    return(
<div className="container-xxl mt-2 d-float  w-100 h-100">
            <div class="row align-items-center d-none d-sm-flex">
                    <div class="col">
                    <img src={helsi_purple} class="rounded d-none d-sm-inline" alt="..."/>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header text-danger">
                            Hey Kid, You're wasting your time!
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Counting is the only way to survive</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary"><Link to='/' className='text-light'>Go Back</Link></a>
                            </div>
                        </div>
                    </div>
                </div>  

            <div className="card d-sm-none">
            <img src={helsi_purple} class="card-img-top" alt="..."/>
            < div className="card-body">
            <h5 className="card-title">You're wasting your time!</h5>
            <p className="card-text">Count everything to survive</p>
            <a href="#" className="btn btn-primary"><Link to='/' className='text-light'>Go Back</Link></a>
            </div>
            </div>   
        </div> 
    );
}
export default CodeTwo;