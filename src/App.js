import './App.css';
import React, { StrictMode } from 'react';
import helsinki from './helsinki.jpeg';
import helsinki_1000 from './helsinki1000_height.jpeg';

function App() {
  return (
<div className="container-xxl mt-5 d-float  text-center w-100 h-100">
  <div class="text-center">
      <img src={helsinki_1000} class="rounded d-none d-sm-inline" alt="..."/>
      <div className="card d-sm-none">
        <img src={helsinki_1000} class="card-img-top" alt="..."/>
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
