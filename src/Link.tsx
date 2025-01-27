// 2. Understand <Link> / <Navlink> / <a> diffrence and create example of it


import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Pages/Home.tsx";
import Contact from "./Pages/Contact.tsx";
import NoPage from "./Pages/NoPage.tsx";


function Link() {
  return (
  
    <BrowserRouter>
    <nav>
        
      <NavLink to="/about">NoPage </NavLink>
      <a href="/contact">Contact </a>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}



export default Link