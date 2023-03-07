import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './Components';
import Cars from './components/Cars';
import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Footer from './components/MyFooter';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Component/>}/>
            <Route path='/home' element={<Component/>}/>
            <Route path='/cars' element={<Cars/>}/>
            <Route path='/table' element={<Table/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
