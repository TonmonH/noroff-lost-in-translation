import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login/Login'
import Translator from './pages/Translator/Translator'
import User from './pages/User/User'
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={ <Login/> } />
          <Route path="/translate" element= { <Translator/> }/>
          <Route path="/user" element= { <User/> }/>
          <Route path="*" element={ <PageNotFound/> } />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
