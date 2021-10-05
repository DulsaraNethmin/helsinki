import './App.css';
import React, { StrictMode } from 'react';
import hr from './hr.jpeg';

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
    </div>
  );
}

export default App;
