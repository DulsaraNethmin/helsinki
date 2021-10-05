import './App.css';
import React, { StrictMode } from 'react';
import Helsinki from './components/Helsinki';
import {Route} from 'react-router-dom';
import Restricted from './components/Restricted';

function App() {
  return (
    <>
      <Route path='/' exact component={Helsinki}/>
      <Route path='/restricted' exact component={Restricted}/>
    </>
  );
}

export default App;
