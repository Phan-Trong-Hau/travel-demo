import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;