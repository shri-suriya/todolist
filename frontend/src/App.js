import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import Loged from './components/Logged/Loged';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//rafce

function App() {
  return (
    <div>
        <Router>
          <Routes>
            
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Register" element={<Register/>} />
              <Route path="/Loged" element={<Loged />} />
            
              
          </Routes>
        </Router>
    </div>
   
  );
}

export default App;
