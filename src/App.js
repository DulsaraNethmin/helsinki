import './App.css';
import React, { StrictMode } from 'react';
import Helsinki from './components/Helsinki';
import {Route} from 'react-router-dom';
import Restricted from './components/Restricted';
import CodeOne from './components/CodeOne';
import CodeTwo from './components/CodeTwo';

function App() {
  return (
    <>
      <Route path='/' exact component={Helsinki}/>
      <Route path='/restricted' exact component={Restricted}/>
      <Route path='/codeone' exact component={CodeOne}/>
      <Route path='/codetwo' exact component={CodeTwo}/>
    </>
  );
}

export default App;
