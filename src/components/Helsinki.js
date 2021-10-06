import React from 'react';
import helsinki_mibile from './helsinki-mobile.jpeg';
import flame from './flame-2x700.jpg';
import {Link} from 'react-router-dom';

function Helsinki(){
    return(
<div className="container-xxl mt-2 d-float  w-100 h-100">
<nav className="navbar navbar-light bg-light  mb-5">
  <div className="container-fluid d-sm-inline">
    <spam className="navbar-brand text-center fw-bold fs-3 text-primary cursor-pointer">
      <Link to='/codeone' class='text-decoration-none'>IEEE Open Day - </Link><Link to='/codetwo' class='text-decoration-none ml-4'>2021</Link>
    </spam>
  </div>
</nav>
  <div className="text-center">
        <div class="row align-items-center d-none d-sm-flex">
            <div class="col">
            <img src={flame} class="rounded d-none d-sm-inline" alt="..."/>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  Happy Helsinki
                </div>
                <div class="card-body">
                  <h5 class="card-title">No moon-night is calm - there is one way to spend that night !</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary"><Link to='/restricted' className='text-light'>Click Everywhere</Link></a>
                </div>
              </div>
            </div>
      </div>
      
      <div className="card d-sm-none">
        <img src={helsinki_mibile} class="card-img-top" alt="..."/>
        < div className="card-body">
        <h5 className="card-title">Happy Helsinki</h5>
        <p className="card-text">No moon-night is calm - there is one way to spend that night !</p>
        <a href="#" className="btn btn-primary"><Link to='/restricted' className='text-light'>Click Everywhere</Link></a>
        </div>
      </div>
  </div>
</div>
    );
}

export default Helsinki;