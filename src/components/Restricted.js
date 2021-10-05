import React from 'react-router-dom';
import {Link} from 'react-router-dom';
import flame from './flame-2x700.jpg';
import question from './question.png';
import helsinki_mibile from './helsinki-mobile.jpeg';

function Restricted(){
    return(
        <div className="container-xxl mt-2 d-float mt-6 w-100 h-100">
                <div class="row align-items-center d-none d-sm-flex">
                    <div class="col">
                    <img src={question} class="rounded d-none d-sm-inline" alt="..."/>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header text-danger">
                            This is Restricted Area
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Finish the task and take your screen shot !</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary"><Link to='/' className='text-light'>Go Back</Link></a>
                            </div>
                        </div>
                    </div>
                </div>  

            <div className="card d-sm-none">
            <img src={helsinki_mibile} class="card-img-top" alt="..."/>
            < div className="card-body">
            <h5 className="card-title">This is Restricted Area</h5>
            <p className="card-text">Finish the task and take your screen shot !</p>
            <a href="#" className="btn btn-primary"><Link to='/' className='text-light'>Go Back</Link></a>
            </div>
            </div>   
        </div>
    );
} 

export default Restricted;