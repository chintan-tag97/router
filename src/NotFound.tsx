// 1. Page-Not-Found routing

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home.tsx";
import Contact from "./Pages/Contact.tsx";
import NoPage from "./Pages/NoPage.tsx";

function NotFound() {
  return (
    
        
 <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/unknown">Unknown</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


 
  )
}

export default NotFound