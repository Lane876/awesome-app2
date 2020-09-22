import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Home} />
     </Switch>
     </BrowserRouter>
  );
}

export default App;
