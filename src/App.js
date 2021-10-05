import './App.css';
import React, { StrictMode } from 'react';
import helsinki from './helsinki.jpeg';
import helsinki_1000 from './helsinki1000_height.jpeg';

function App() {
  return (
<div className="container-xxl mt-5 d-float  text-center w-100 h-100">
    <div class="text-center">
      <img src={helsinki_1000} class="rounded" alt="..."/>
    </div>
</div>
  );
}

export default App;
