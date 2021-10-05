import './App.css';
import React, { StrictMode } from 'react';
import helsinki from './helsinki.jpeg';
import helsinki_1000 from './helsinki1000_height.jpeg';
import helsinki_mibile from './helsinki-mobile.jpeg';

function App() {
  return (

<div className="container-xxl mt-5 d-float  w-100 h-100">
<nav className="navbar navbar-light bg-light  ">
  <div className="container-fluid d-sm-inline">
    <a className="navbar-brand text-center fw-bold fs-3 text-primary" href="#">
      IEEE Open Day 2021
    </a>
  </div>
</nav>
  <div className="text-center">
        <div class="row align-items-start d-none d-sm-flex">
            <div class="col">
            <img src={helsinki_1000} class="rounded d-none d-sm-inline" alt="..."/>
            </div>
            <div class="col">
              One of three columns
            </div>
      </div>
      
      <div className="cardd-sm-none">
        <img src={helsinki_mibile} class="card-img-top" alt="..."/>
        < div className="card-body">
        <h5 className="card-title">Helsinki</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  </div>
</div>
  );
}

export default App;
