
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout from "./Pages/Layout.tsx";
import Home from "./Pages/Home.tsx";
import Blogs from "./Pages/Blogs.tsx";
import Contact from "./Pages/Contact.tsx";
import NoPage from "./Pages/NoPage.tsx";

function All() {

      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));

    
  

export default All