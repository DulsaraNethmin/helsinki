import './App.css';
import React, { StrictMode } from 'react';
import helsinki from './helsinki.jpeg';
import helsinki_1000 from './helsinki1000_height.jpeg';
import helsinki_mibile from './helsinki-mobile.jpeg';
import flame from './flame-2x700.jpg';
import question from './question.png';

function App() {
  return (

<div className="container-xxl mt-2 d-float  w-100 h-100">
<nav className="navbar navbar-light bg-light  ">
  <div className="container-fluid d-sm-inline">
    <a className="navbar-brand text-center fw-bold fs-3 text-primary" href="#">
      IEEE Open Day 2021
    </a>
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
                  <h5 class="card-title">Don't trust your eye ! Snake is moving...</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
      </div>
      
      <div className="card d-sm-none">
        <img src={helsinki_mibile} class="card-img-top" alt="..."/>
        < div className="card-body">
        <h5 className="card-title">Happy Helsinki</h5>
        <p className="card-text">Don't trust your eye ! Snake is moving...</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  </div>
</div>
  );
}

export default App;
