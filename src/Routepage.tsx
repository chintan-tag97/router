// 3. Show active-link in different color (eg. change style or apply class) [use both ways]

import React from "react";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";


import Home from "./Pages/Home.tsx";
import Contact from "./Pages/Contact.tsx";
import NoPage from "./Pages/NoPage.tsx";
import Blogs from "./Pages/Blogs.tsx";

function Routepage() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        <NavLink to="/about" style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            fontWeight: isActive ? "bold" : "normal",
       
          })}> NoPage </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "pink" : "purple",
            fontWeight: isActive ? "bold" : "normal",
        
          })}
          
        >
          Contact
        </NavLink>

        <NavLink
          to="/blogs"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
            fontWeight: isActive ? "bold" : "normal",
         
          })}
        >
          BLogs
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routepage;
