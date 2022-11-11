import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import './App.css';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import Login from './components/User/LogIn';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/authors" element={<Authors /> } />
        <Route exact path="/books" element={<Books /> } />
        <Route exact path="/login" element={loggedIn ? <Home /> :<Login setLoggedIn={setLoggedIn} />} />
        {/* <Route exact path="/mylibrary" element={<MyLibrary />} /> */}
      </Routes>
      <AboutUs />
    </BrowserRouter>
  );
};

export default App;
