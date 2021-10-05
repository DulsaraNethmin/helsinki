import './App.css';
import React, { StrictMode } from 'react';
import hr from './hr.jpeg';
import sa from './s.jpeg'; 
import vr from './vira.jpeg';

function App() {
  return (
<div className='container-sm'>
  <div class="card my-4 p">
  <img src={hr} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mawathagama Harsha</h5>
    <p class="card-text">I'm Harsha Amarasighe.Maliyadewa Collage - Kurunagala</p>
    <a href="#" class="btn btn-primary">Chat with me</a>
  </div>
  </div>

  <div class="card my-4 p">
  <img src={sa} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Kalani Sangeeth</h5>
    <p class="card-text">hi,I'm Sangeeth Navodya.</p>
    <a href="#" class="btn btn-primary">Chat with me</a>
  </div>
  </div>

  <div class="card my-4 p">
  <img src={vr} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Vingara Bandara</h5>
    <p class="card-text">I'm Viranga Bandara from Mawanalla</p>
    <a href="#" class="btn btn-primary">Chat with me(ses)</a>
  </div>
  </div>
</div>
  );
}

export default App;
